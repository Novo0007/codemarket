// Load transactions from localStorage or initialize empty array
        let transactions = JSON.parse(localStorage.getItem('friendTransactions')) || [];
        
        // Display transactions when page loads
        document.addEventListener('DOMContentLoaded', function() {
            renderTransactions();
            updateSummary();
            renderFriendBalances();
        });
        
        // Add a new transaction
        function addTransaction() {
            const friendName = document.getElementById('friendName').value.trim();
            const amount = parseFloat(document.getElementById('amount').value);
            const transactionType = document.getElementById('transactionType').value;
            const description = document.getElementById('description').value.trim();
            
            if (!friendName || isNaN(amount)) {
                alert('Please enter valid friend name and amount');
                return;
            }
            
            const transaction = {
                id: Date.now(),
                date: new Date().toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                }),
                friendName,
                amount,
                transactionType,
                description: description || 'No description'
            };
            
            transactions.push(transaction);
            saveTransactions();
            renderTransactions();
            updateSummary();
            renderFriendBalances();
            
            // Clear form
            document.getElementById('friendName').value = '';
            document.getElementById('amount').value = '';
            document.getElementById('description').value = '';
            document.getElementById('friendName').focus();
        }
        
        // Delete a transaction
        function deleteTransaction(id) {
            if (confirm('Are you sure you want to delete this transaction?')) {
                transactions = transactions.filter(transaction => transaction.id !== id);
                saveTransactions();
                renderTransactions();
                updateSummary();
                renderFriendBalances();
            }
        }
        
        // Save transactions to localStorage
        function saveTransactions() {
            localStorage.setItem('friendTransactions', JSON.stringify(transactions));
        }
        
        // Display all transactions in the table
        function renderTransactions() {
            const tbody = document.getElementById('transactionsBody');
            const noTransactions = document.getElementById('noTransactions');
            
            tbody.innerHTML = '';
            
            if (transactions.length === 0) {
                noTransactions.style.display = 'block';
                return;
            }
            
            noTransactions.style.display = 'none';
            
            // Sort by date (newest first)
            const sortedTransactions = [...transactions].sort((a, b) => b.id - a.id);
            
            sortedTransactions.forEach(transaction => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${transaction.date}</td>
                    <td>
                        <div class="friend-avatar">${transaction.friendName.charAt(0).toUpperCase()}</div>
                        ${transaction.friendName}
                    </td>
                    <td>${transaction.description}</td>
                    <td class="${transaction.transactionType === 'gave' ? 'negative' : 'positive'}">
                        ₹${transaction.amount.toFixed(2)}
                    </td>
                    <td>
                        <span class="badge ${transaction.transactionType === 'gave' ? 'badge-danger' : 'badge-success'}">
                            ${transaction.transactionType === 'gave' ? 'You gave' : 'They took'}
                        </span>
                    </td>
                    <td class="actions">
                        <button class="btn btn-danger btn-sm" onclick="deleteTransaction(${transaction.id})">
                            <i class="fas fa-trash-alt"></i> Delete
                        </button>
                    </td>
                `;
                
                tbody.appendChild(row);
            });
        }
        
        // Update the summary section
        function updateSummary() {
            if (transactions.length === 0) {
                document.getElementById('totalFriends').textContent = '0';
                document.getElementById('totalGave').textContent = '₹0.00';
                document.getElementById('totalTook').textContent = '₹0.00';
                document.getElementById('netBalance').textContent = '₹0.00';
                return;
            }
            
            // Calculate total gave and took
            let totalGave = 0;
            let totalTook = 0;
            
            transactions.forEach(transaction => {
                if (transaction.transactionType === 'gave') {
                    totalGave += transaction.amount;
                } else {
                    totalTook += transaction.amount;
                }
            });
            
            // Calculate unique friends
            const uniqueFriends = [...new Set(transactions.map(t => t.friendName))];
            
            // Update summary cards
            document.getElementById('totalFriends').textContent = uniqueFriends.length;
            document.getElementById('totalGave').textContent = `₹${totalGave.toFixed(2)}`;
            document.getElementById('totalTook').textContent = `₹${totalTook.toFixed(2)}`;
            
            // Calculate and display net balance
            const netBalance = totalTook - totalGave;
            const netBalanceElement = document.getElementById('netBalance');
            netBalanceElement.textContent = `₹${Math.abs(netBalance).toFixed(2)}`;
            netBalanceElement.className = `amount ${netBalance >= 0 ? 'positive' : 'negative'}`;
        }
        
        // Render friend balances
        function renderFriendBalances() {
            const container = document.getElementById('friendBalances');
            container.innerHTML = '';
            
            if (transactions.length === 0) {
                container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #777;">No transactions to calculate balances</p>';
                return;
            }
            
            // Calculate balances per friend
            const friendBalances = {};
            
            transactions.forEach(transaction => {
                if (!friendBalances[transaction.friendName]) {
                    friendBalances[transaction.friendName] = 0;
                }
                
                if (transaction.transactionType === 'gave') {
                    friendBalances[transaction.friendName] -= transaction.amount;
                } else {
                    friendBalances[transaction.friendName] += transaction.amount;
                }
            });
            
            // Sort friends by balance amount (absolute value)
            const sortedFriends = Object.keys(friendBalances).sort((a, b) => {
                return Math.abs(friendBalances[b]) - Math.abs(friendBalances[a]);
            });
            
            // Create balance cards
            sortedFriends.forEach(friend => {
                const balance = friendBalances[friend];
                const balanceCard = document.createElement('div');
                balanceCard.className = 'friend-balance';
                
                balanceCard.innerHTML = `
                    <div class="friend-balance-info">
                        <div class="friend-avatar">${friend.charAt(0).toUpperCase()}</div>
                        <div>
                            <div class="friend-name">${friend}</div>
                            <small>${Math.abs(balance).toFixed(2)}</small>
                        </div>
                    </div>
                    <div class="friend-balance-amount ${balance < 0 ? 'negative' : 'positive'}">
                        ${balance < 0 ? 'You gave' : 'They took'}
                    </div>
                `;
                
                container.appendChild(balanceCard);
            });
        }
        
        // Export data as CSV
        function exportData() {
            if (transactions.length === 0) {
                alert('No transactions to export');
                return;
            }
            
            // Create CSV header
            let csv = 'Date,Friend,Description,Amount,Type\n';
            
            // Add transactions to CSV
            transactions.forEach(transaction => {
                csv += `"${transaction.date}","${transaction.friendName}","${transaction.description}",${transaction.amount},"${transaction.transactionType === 'gave' ? 'You gave' : 'They took'}"\n`;
            });
            
            // Create download link
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `friend_money_tracker_${new Date().toISOString().slice(0, 10)}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }