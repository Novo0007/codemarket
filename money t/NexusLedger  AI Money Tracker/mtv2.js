 // ===== FUTURISTIC MONEY TRACKER ===== //
        let transactions = JSON.parse(localStorage.getItem('nexusTransactions')) || [];
        let voiceRecognition = null;

        // Initialize on load
        document.addEventListener('DOMContentLoaded', function() {
            renderTransactions();
            updateAIInsights();
            render3DChart();
            setupVoiceCommands();
        });

        // ==== CORE FUNCTIONS ==== //
        function addTransaction() {
            const friendName = document.getElementById('friendName').value.trim();
            const amount = parseFloat(document.getElementById('amount').value);
            const transactionType = document.getElementById('transactionType').value;
            const description = document.getElementById('description').value.trim();

            if (!friendName || isNaN(amount)) {
                showAIMessage("ERROR: Invalid input. Please check friend name and amount.");
                return;
            }

            const transaction = {
                id: Date.now(),
                date: new Date().toLocaleString(),
                friendName,
                amount,
                transactionType,
                description: description || "No description",
                category: predictCategory(description)
            };

            transactions.push(transaction);
            saveTransactions();
            renderTransactions();
            updateAIInsights();
            render3DChart();

            // Clear form
            document.getElementById('friendName').value = '';
            document.getElementById('amount').value = '';
            document.getElementById('description').value = '';
            
            showAIMessage(`SUCCESS: Added ${transactionType === 'gave' ? 'payment' : 'debt'} of ₹${amount} with ${friendName}.`);
        }

        function deleteTransaction(id) {
            transactions = transactions.filter(t => t.id !== id);
            saveTransactions();
            renderTransactions();
            updateAIInsights();
            render3DChart();
            showAIMessage("ALERT: Transaction deleted from database.");
        }

        function saveTransactions() {
            localStorage.setItem('nexusTransactions', JSON.stringify(transactions));
        }

        // ==== AI FUNCTIONS ==== //
        function updateAIInsights() {
            const insightsDiv = document.getElementById('aiInsights');
            
            if (transactions.length === 0) {
                insightsDiv.innerHTML = `
                    <div class="ai-message">
                        > No transactions yet. Add data to unlock AI insights.
                    </div>
                `;
                return;
            }

            // AI analyzes data and gives tips
            const totalGave = transactions.reduce((sum, t) => t.transactionType === 'gave' ? sum + t.amount : sum, 0);
            const totalTook = transactions.reduce((sum, t) => t.transactionType === 'took' ? sum + t.amount : sum, 0);
            const netBalance = totalTook - totalGave;

            let aiMessage = `> NET BALANCE: ${netBalance >= 0 ? 'They owe you ₹' + netBalance.toFixed(2) : 'You owe ₹' + Math.abs(netBalance).toFixed(2)}\n`;

            // Find largest debt
            const friendBalances = {};
            transactions.forEach(t => {
                if (!friendBalances[t.friendName]) friendBalances[t.friendName] = 0;
                friendBalances[t.friendName] += t.transactionType === 'gave' ? -t.amount : t.amount;
            });

            const biggestDebtor = Object.entries(friendBalances).reduce((a, b) => b[1] > a[1] ? b : a, ['', 0]);
            const biggestCreditor = Object.entries(friendBalances).reduce((a, b) => b[1] < a[1] ? b : a, ['', 0]);

            if (biggestDebtor[1] > 0) {
                aiMessage += `> ALERT: ${biggestDebtor[0]} owes you ₹${biggestDebtor[1].toFixed(2)} (highest debt)\n`;
            }

            if (biggestCreditor[1] < 0) {
                aiMessage += `> REMINDER: You owe ${biggestCreditor[0]} ₹${Math.abs(biggestCreditor[1]).toFixed(2)}\n`;
            }

            // Category analysis
            const categories = {};
            transactions.forEach(t => {
                if (t.category) {
                    categories[t.category] = (categories[t.category] || 0) + t.amount;
                }
            });

            if (Object.keys(categories).length > 0) {
                const topCategory = Object.entries(categories).reduce((a, b) => b[1] > a[1] ? b : a, ['', 0]);
                aiMessage += `> TREND: Most transactions are for "${topCategory[0]}" (₹${topCategory[1].toFixed(2)})\n`;
            }

            insightsDiv.innerHTML = `<div class="ai-message">${aiMessage}</div>`;
            updateDebtPrediction();
        }

        function predictCategory(description) {
            const desc = description.toLowerCase();
            if (desc.includes('food') || desc.includes('dinner') || desc.includes('lunch')) return 'Food';
            if (desc.includes('movie') || desc.includes('netflix')) return 'Entertainment';
            if (desc.includes('loan') || desc.includes('borrow')) return 'Loan';
            if (desc.includes('travel') || desc.includes('fuel')) return 'Transport';
            return 'Other';
        }

        function updateDebtPrediction() {
            const predictionDiv = document.getElementById('debtPrediction');
            
            if (transactions.length < 3) {
                predictionDiv.innerHTML = `
                    <div class="ai-message">
                        > Need more data (min 3 transactions) for accurate predictions.
                    </div>
                `;
                return;
            }

            // Simple prediction algorithm (in a real app, use ML)
            const lastWeekTransactions = transactions.slice(-3);
            const avgAmount = lastWeekTransactions.reduce((sum, t) => sum + t.amount, 0) / 3;
            const prediction = avgAmount * 2; // Project next 2 weeks
            
            predictionDiv.innerHTML = `
                <div class="ai-message">
                    > PREDICTION: Based on recent activity, expected transactions of ~₹${prediction.toFixed(2)} in next 14 days.
                </div>
            `;
        }

        function showAIMessage(message) {
            document.getElementById('aiMessage').textContent = `> ${message}`;
        }

        // ==== VISUALIZATION ==== //
        function render3DChart() {
            const chartDom = document.getElementById('balanceChart');
            const myChart = echarts.init(chartDom);

            if (transactions.length === 0) {
                myChart.setOption({
                    title: {
                        text: 'No data yet',
                        left: 'center',
                        top: 'center',
                        textStyle: {
                            color: '#999'
                        }
                    }
                });
                return;
            }

            // Process data for chart
            const friendBalances = {};
            transactions.forEach(t => {
                if (!friendBalances[t.friendName]) friendBalances[t.friendName] = 0;
                friendBalances[t.friendName] += t.transactionType === 'gave' ? -t.amount : t.amount;
            });

            const data = Object.entries(friendBalances).map(([name, balance]) => ({
                value: Math.abs(balance),
                name: name,
                itemStyle: {
                    color: balance >= 0 ? '#00ff41' : '#ff2a6d'
                }
            }));

            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: ₹{c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: Object.keys(friendBalances),
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: 'Balance',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#0a0a1a',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '18',
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: data
                    }
                ]
            };

            myChart.setOption(option);
        }

        // ==== VOICE COMMANDS ==== //
        function setupVoiceCommands() {
            const voiceBtn = document.getElementById('voiceBtn');
            const voiceInput = document.getElementById('voiceInput');

            // Check if browser supports speech recognition
            if ('webkitSpeechRecognition' in window) {
                voiceRecognition = new webkitSpeechRecognition();
                voiceRecognition.continuous = false;
                voiceRecognition.interimResults = false;

                voiceRecognition.onresult = function(event) {
                    const transcript = event.results[0][0].transcript;
                    voiceInput.value = transcript;
                    processVoiceCommand(transcript);
                };

                voiceRecognition.onerror = function(event) {
                    showAIMessage("ERROR: Voice recognition failed. Try typing instead.");
                };

                voiceBtn.addEventListener('click', function() {
                    voiceRecognition.start();
                    showAIMessage("Listening... Speak now.");
                });
            } else {
                voiceBtn.style.display = 'none';
                voiceInput.placeholder = "Browser doesn't support voice commands";
            }

            voiceInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    processVoiceCommand(voiceInput.value);
                    voiceInput.value = '';
                }
            });
        }

        function processVoiceCommand(command) {
            command = command.toLowerCase();
            showAIMessage(`Processing: "${command}"`);

            // Simple voice command parsing
            if (command.includes('add') || command.includes('new')) {
                const amountMatch = command.match(/(\d+)/);
                const nameMatch = command.match(/from (\w+)|with (\w+)/i);
                const type = command.includes('gave') ? 'gave' : 'took';

                if (amountMatch && nameMatch) {
                    const amount = parseFloat(amountMatch[0]);
                    const name = nameMatch[1] || nameMatch[2];
                    
                    // Simulate adding transaction
                    setTimeout(() => {
                        document.getElementById('friendName').value = name;
                        document.getElementById('amount').value = amount;
                        document.getElementById('transactionType').value = type;
                        showAIMessage(`CONFIRM: Add ₹${amount} ${type === 'gave' ? 'to' : 'from'} ${name}? Press the button.`);
                    }, 1000);
                } else {
                    showAIMessage("ERROR: Couldn't detect amount or name. Try 'Add ₹500 from Rohan'");
                }
            } else if (command.includes('balance') || command.includes('summary')) {
                updateAIInsights();
            } else {
                showAIMessage("Sorry, I didn't understand. Try 'Add ₹500 from Rohan'");
            }
        }

        // ==== RENDER TRANSACTIONS ==== //
        function renderTransactions() {
            const tbody = document.getElementById('transactionsBody');
            tbody.innerHTML = '';

            if (transactions.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="6" style="text-align: center; color: #666;">
                            No transactions yet. Add your first transaction above.
                        </td>
                    </tr>
                `;
                return;
            }

            // Sort by newest first
            const sortedTransactions = [...transactions].sort((a, b) => b.id - a.id);

            sortedTransactions.forEach(t => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${t.date}</td>
                    <td>
                        <span style="color: var(--neon-blue);">${t.friendName}</span>
                    </td>
                    <td>${t.description}</td>
                    <td class="${t.transactionType === 'gave' ? 'negative-balance' : 'positive-balance'}">
                        ₹${t.amount.toFixed(2)}
                    </td>
                    <td>
                        <span style="color: ${t.transactionType === 'gave' ? 'var(--neon-pink)' : 'var(--matrix-green)'}">
                            ${t.transactionType === 'gave' ? 'PAID' : 'RECEIVED'}
                        </span>
                    </td>
                    <td>
                        <button onclick="deleteTransaction(${t.id})" style="
                            background: transparent;
                            border: 1px solid var(--neon-pink);
                            color: var(--neon-pink);
                            padding: 5px 10px;
                            border-radius: 4px;
                            cursor: pointer;
                        ">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }