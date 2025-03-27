 document.addEventListener('DOMContentLoaded', function() {
            // Sample data for code listings with yearly subscription prices
            const sampleListings = [
                {
                    id: 1,
                    title: 'Responsive Fitness Website',
                    description: 'A fully responsive Fitness website built with HTML, CSS, and JavaScript. Includes product catalog, cart functionality, and checkout page. Yearly subscription gives you access to all updates and support.',
                    language: 'JavaScript',
                    category: 'web',
                    price: 999999,
                    yearlyPrice: 9999,
                    author: 'webdev123',
                    image: 'https://themewagon.com/wp-content/uploads/2025/02/Fitness-1200x718.webp',
                    features: [
                        'Full source code access',
                        '1 year of updates',
                        'Priority support',
                        'Documentation included'
                    ],
                    playUrl: 'https://themewagon.github.io/Fitness/',
                    previewUrl: 'https://themewagon.github.io/Fitness/',
                    isFree: true
                },
                {
                    id: 2,
                    title: 'Pixel Art Camera',
                    description: 'A Pixel Art Camera transforms real-world images into pixelated, retro-style artwork reminiscent of classic 8-bit and 16-bit video games.',
                    language: 'JavaScript',
                    category: 'mobile',
                    price: 199999,
                    yearlyPrice: 9999,
                    author: 'gilles',
                    image: 'https://media2.giphy.com/media/BeFskdG0tJzqyYxPxL/giphy.webp?cid=790b7611iwcqqpdb2vw9a4x118x4z0lgsmlkn55ck4d7e5yz&ep=v1_gifs_search&rid=giphy.webp&ct=g',
                    features: [
                        'React Native source code',
                        '1 year of updates',
                        'Basic support',
                        'MIT License'
                    ],
                    playUrl: 'https://microstudio.io/gilles/pixelartcamera/',
                    previewUrl: 'https://microstudio.io/gilles/pixelartcamera/',
                    isFree: false
                },
                {
                    id: 3,
                    title: 'JerryAI Tool',
                    description: 'Transform your ideas into stunning anime characters in seconds. Free, easy to use, and no sign-up required.',
                    language: 'Python',
                    category: 'ai',
                    price: 122999,
                    yearlyPrice: 999,
                    author: 'NNC',
                    image: 'https://media3.giphy.com/media/CccEJ1t9STE5vA5F7E/200.webp?cid=ecf05e47odcbsez9f15obm4nf762jf4gjfhagc4aqhz3lhus&ep=v1_gifs_search&rid=200.webp&ct=g',
                    features: [
                        'Python script with Jupyter notebook',
                        '1 year of updates',
                        'New template additions',
                        'Commercial use allowed'
                    ],
                    playUrl: 'https://novo0007.github.io/JerryAI/1.html',
                    previewUrl: 'https://novo0007.github.io/JerryAI/1.html',
                    isFree: false
                },
                {
                    id: 4,
                    title: 'Flappy 3 birds',
                    description: 'A simple 2D platformer game built with Unity and C#. Includes character controller, enemies, and collectibles.',
                    language: 'C#',
                    category: 'game',
                    price: 999999,
                    yearlyPrice: 8999,
                    author: 'gilles',
                    image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmE4bHJqMzIydzJlczBjZ2lrczQ0MzU3NjMyb3AzMWxpNzZsMDJsbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/euuaA2cwLEUuI/200.webp',
                    features: [
                        'Complete Unity project',
                        '1 year of updates',
                        'New level additions',
                        'Royalty-free use'
                    ],
                    playUrl: 'https://microstudio.io/nnc1231/flappy3birds/2M3CC75V/',
                    previewUrl: 'https://microstudio.io/nnc1231/flappy3birds/2M3CC75V/',
                    isFree: false
                },
                {
                    id: 5,
                    title: 'Marblequest',
                    description: 'A The best pixel art only from @Vampirics of the classic game with enhanced graphics and new power-ups.',
                    language: 'JavaScript',
                    category: 'game',
                    price: 299999,
                    yearlyPrice: 1999,
                    author: 'gamecoder',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8nDSslxsAyRbzUz289WHXtL_ZFCxlk03FQ&s',
                    features: [
                        'Complete JavaScript source',
                        'Mobile responsive',
                        'Leaderboard system',
                        'Easy to customize'
                    ],
                    playUrl: 'https://microstudio.io/nnc1231/marblequest/EVW43K2X/',
                    previewUrl: 'https://microstudio.io/nnc1231/marblequest/EVW43K2X/',
                    isFree: false
                },
                {
                    id: 6,
                    title: 'Never Gonna Give You Up',
                    description: 'A weather application that fetches data from API and displays forecast in a beautiful UI.',
                    language: 'JavaScript',
                    category: 'web',
                    price: 0,
                    yearlyPrice: 0,
                    author: 'Rick Astley',
                    image: 'https://media2.giphy.com/media/lW9XPLjNXyDDO/200.webp?cid=790b7611swfxhl2unf2t004wbs6w25pl4lpss3a2cfnn2osv&ep=v1_gifs_search&rid=200.webp&ct=g',
                    features: [
                        'API integration',
                        'Responsive design',
                        '5-day forecast',
                        'Location detection'
                    ],
                    playUrl: 'https://youtu.be/dQw4w9WgXcQ?si=5h_oASyew87nDEHv',
                    previewUrl: 'https://youtu.be/dQw4w9WgXcQ?si=5h_oASyew87nDEHv',
                    isFree: true
                },
                {
                    id: 7,
                    title: 'Netflix Free',
                    description: 'Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.',
                    language: 'JavaScript',
                    category: 'mobile',
                    price: 4999,
                    yearlyPrice: 999,
                    author: 'netmirror',
                    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/fb762791877129.5e3cb3903fb67.gif',
                    features: [
                        'React Native code',
                        'Firebase backend',
                        'Push notifications',
                        'Dark mode'
                    ],
                    playUrl: 'https://netfree.cc/mobile/movies',
                    previewUrl: 'https://netfree.cc/mobile/movies',
                    isFree: false
                },
                {
                    id: 8,
                    title: 'Image Background Remover',
                    description: 'No matter if you want to make a background transparent (PNG), add a white background to a photo, extract or isolate the subject, or get the cutout of a photo.',
                    language: 'Python',
                    category: 'ai',
                    price: 49999,
                    yearlyPrice: 3999,
                    author: 'NNC',
                    image: 'https://media3.giphy.com/media/zuPQcXUe1iXWu3djLs/giphy.webp?cid=790b7611f7ltoi6rrz15fxq0jkqns72bpqye83cibjbzowja&ep=v1_gifs_search&rid=giphy.webp&ct=g',
                    features: [
                        'Stable Diffusion integration',
                        'Custom model training',
                        'Batch processing',
                        'API access'
                    ],
                    playUrl: 'https://novo0007.github.io/rev/new/p1/rev.html',
                    previewUrl: 'https://novo0007.github.io/rev/new/p1/rev.html',
                    isFree: false
                }
            ];

            // DOM Elements
            const codeListingsContainer = document.getElementById('code-listings');
            const codeDetailsModal = document.getElementById('code-details-modal');
            const codeDetailsContainer = document.getElementById('code-details');
            const purchaseStatusModal = document.getElementById('purchase-status-modal');
            const purchaseStatusContent = document.getElementById('purchase-status-content');
            const previewModal = document.getElementById('preview-modal');
            const previewFrame = document.getElementById('preview-frame');
            const upgradeBtn = document.getElementById('upgrade-btn');
            const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
            const mainNav = document.getElementById('main-nav');
            const categoryFilter = document.getElementById('category-filter');
            const languageFilter = document.getElementById('language-filter');
            const priceFilter = document.getElementById('price-filter');
            const paginationContainer = document.getElementById('pagination');
            const closeBtns = document.querySelectorAll('.close-btn');

            // Pagination variables
            const itemsPerPage = 4;
            let currentPage = 1;
            let filteredListings = [...sampleListings];

            // Initialize the app
            function init() {
                renderCodeListings();
                setupEventListeners();
                renderPagination();
            }

            // Set up event listeners
            function setupEventListeners() {
                // Mobile menu toggle
                mobileMenuToggle.addEventListener('click', () => {
                    mainNav.classList.toggle('active');
                });

                // Close modals
                closeBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        codeDetailsModal.classList.remove('active');
                        purchaseStatusModal.classList.remove('active');
                        previewModal.classList.remove('active');
                    });
                });
                
                // Filter event listeners
                categoryFilter.addEventListener('change', filterAndRenderListings);
                languageFilter.addEventListener('change', filterAndRenderListings);
                priceFilter.addEventListener('change', filterAndRenderListings);
                
                // Close modal when clicking outside
                window.addEventListener('click', (e) => {
                    if (e.target === codeDetailsModal) codeDetailsModal.classList.remove('active');
                    if (e.target === purchaseStatusModal) purchaseStatusModal.classList.remove('active');
                    if (e.target === previewModal) previewModal.classList.remove('active');
                });

                // Upgrade button in preview modal
                upgradeBtn.addEventListener('click', () => {
                    previewModal.classList.remove('active');
                    const listingId = parseInt(upgradeBtn.dataset.listingId);
                    showCodeDetails(listingId);
                });
            }

            // Filter and render listings based on current filters
            function filterAndRenderListings() {
                const category = categoryFilter.value;
                const language = languageFilter.value;
                const price = priceFilter.value;
                
                filteredListings = [...sampleListings];
                
                if (category !== 'all') {
                    filteredListings = filteredListings.filter(listing => listing.category === category);
                }
                
                if (language !== 'all') {
                    filteredListings = filteredListings.filter(listing => listing.language.toLowerCase() === language);
                }
                
                if (price !== 'all') {
                    if (price === 'free') {
                        filteredListings = filteredListings.filter(listing => listing.isFree);
                    } else {
                        filteredListings = filteredListings.filter(listing => !listing.isFree);
                    }
                }

                currentPage = 1;
                renderCodeListings();
                renderPagination();
            }

            // Render code listings for current page
            function renderCodeListings() {
                if (!codeListingsContainer) return;
                
                codeListingsContainer.innerHTML = '';
                
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const paginatedListings = filteredListings.slice(startIndex, endIndex);
                
                if (paginatedListings.length === 0) {
                    codeListingsContainer.innerHTML = '<p class="no-results">No listings found matching your criteria.</p>';
                    return;
                }
                
                paginatedListings.forEach(listing => {
                    const listingElement = createCodeCard(listing);
                    codeListingsContainer.appendChild(listingElement);
                });
            }

            // Create pagination buttons
            function renderPagination() {
                if (!paginationContainer) return;
                
                const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
                
                if (totalPages <= 1) {
                    paginationContainer.innerHTML = '';
                    return;
                }
                
                let paginationHTML = '';
                
                // Previous button
                paginationHTML += `
                    <button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" 
                            onclick="changePage(${currentPage - 1})" 
                            ${currentPage === 1 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-left"></i>
                    </button>
                `;
                
                // Page numbers
                for (let i = 1; i <= totalPages; i++) {
                    paginationHTML += `
                        <button class="page-btn ${i === currentPage ? 'active' : ''}" 
                                onclick="changePage(${i})">
                            ${i}
                        </button>
                    `;
                }
                
                // Next button
                paginationHTML += `
                    <button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" 
                            onclick="changePage(${currentPage + 1})" 
                            ${currentPage === totalPages ? 'disabled' : ''}>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                `;
                
                paginationContainer.innerHTML = paginationHTML;
            }

            // Change current page
            window.changePage = function(page) {
                if (page < 1 || page > Math.ceil(filteredListings.length / itemsPerPage)) return;
                currentPage = page;
                renderCodeListings();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            // Create a code card element
            function createCodeCard(listing) {
                const card = document.createElement('div');
                card.className = 'code-card';
                card.dataset.id = listing.id;
                
                const priceHTML = listing.isFree ? 
                    '<span class="code-card-price">FREE</span>' : 
                    `<span class="code-card-price">₹${(listing.yearlyPrice / 100).toFixed(2)}/year</span>`;
                
                card.innerHTML = `
                    <div class="code-card-img">
                        ${listing.isFree ? '<span class="free-badge">FREE</span>' : ''}
                        <img src="${listing.image}" alt="${listing.title}">
                    </div>
                    <div class="code-card-content">
                        <h3 class="code-card-title">${listing.title}</h3>
                        <p class="code-card-description">${listing.description}</p>
                        <div class="code-card-meta">
                            <span class="code-card-language">${listing.language}</span>
                            ${priceHTML}
                        </div>
                        <div class="code-card-footer">
                            <span class="code-card-author">by ${listing.author}</span>
                            <button class="view-btn">View Details</button>
                        </div>
                    </div>
                `;
                
                // Add click event to view button
                const viewBtn = card.querySelector('.view-btn');
                viewBtn.addEventListener('click', () => {
                    if (listing.isFree) {
                        showAccessView(listing);
                    } else {
                        const hasPurchased = checkPurchaseStatus(listing.id);
                        if (hasPurchased) {
                            showAccessView(listing);
                        } else {
                            showCodeDetails(listing.id);
                        }
                    }
                });
                
                return card;
            }

            // Show code details modal
            function showCodeDetails(listingId) {
                const listing = sampleListings.find(item => item.id === listingId);
                
                if (!listing) return;
                
                codeDetailsContainer.innerHTML = `
                    <div class="code-details-img">
                        <img src="${listing.image}" alt="${listing.title}">
                        <button class="preview-btn" onclick="showPreview('${listing.previewUrl}', ${listing.id})">
                            <i class="fas fa-eye"></i> Free Preview
                        </button>
                    </div>
                    <h2 class="code-details-title">${listing.title}</h2>
                    <div class="code-details-meta">
                        <span class="code-details-author"><i class="fas fa-user"></i> ${listing.author}</span>
                        <span class="code-details-category"><i class="fas fa-tag"></i> ${getCategoryName(listing.category)}</span>
                        <span class="code-details-language"><i class="fas fa-code"></i> ${listing.language}</span>
                    </div>
                    
                    <div class="subscription-plans">
                        <div class="subscription-plan recommended">
                            <h3 class="plan-name">Yearly Subscription</h3>
                            <div class="plan-price">₹${(listing.yearlyPrice / 100).toFixed(2)} <span>/ year</span></div>
                            <ul class="plan-features">
                                ${listing.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                            </ul>
                            <button class="plan-select-btn" onclick="initiatePayment(${listing.id}, 'yearly')">Subscribe Now</button>
                        </div>
                        
                        <div class="subscription-plan">
                            <h3 class="plan-name">One-Time Purchase</h3>
                            <div class="plan-price">₹${(listing.price / 100).toFixed(2)}</div>
                            <ul class="plan-features">
                                <li><i class="fas fa-check"></i> Full source code access</li>
                                <li><i class="fas fa-check"></i> Basic support for 30 days</li>
                                <li><i class="fas fa-check"></i> Single project use</li>
                                <li><i class="fas fa-check"></i> No automatic updates</li>
                            </ul>
                            <button class="plan-select-btn" onclick="initiatePayment(${listing.id}, 'onetime')">Purchase Now</button>
                        </div>
                    </div>
                    
                    <div class="code-details-description">
                        <h3>Description</h3>
                        <p>${listing.description}</p>
                    </div>
                `;
                
                codeDetailsModal.classList.add('active');
            }

            // Show preview modal
            window.showPreview = function(previewUrl, listingId) {
                previewFrame.src = previewUrl;
                upgradeBtn.dataset.listingId = listingId;
                previewModal.classList.add('active');
                codeDetailsModal.classList.remove('active');
            };

            // Show access view based on purchase status
            function showAccessView(listing) {
                const hasPurchased = checkPurchaseStatus(listing.id);
                
                purchaseStatusContent.innerHTML = `
                    <div class="purchase-status">
                        <div class="purchase-status-icon success">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>${listing.isFree ? 'Free Game' : 'Access Granted!'}</h3>
                        ${hasPurchased && !listing.isFree ? 
                            `<p>You have access to "${listing.title}" until ${new Date(hasPurchased.expiry).toLocaleDateString()}.</p>` : 
                            `<p>Enjoy this ${listing.isFree ? 'free' : 'purchased'} ${listing.category === 'game' ? 'game' : 'application'}!</p>`}
                        <a href="${listing.playUrl}" class="play-now-btn" target="_blank">
                            <i class="fas fa-play"></i> ${listing.category === 'game' ? 'Play Now' : 'View Now'}
                        </a>
                        <p class="redirect-message">You will be redirected to the ${listing.category === 'game' ? 'game' : 'application'} page</p>
                    </div>
                `;
                
                purchaseStatusModal.classList.add('active');
            }

            // Check purchase status from localStorage
            function checkPurchaseStatus(listingId) {
                const purchases = JSON.parse(localStorage.getItem('codeMarketPurchases')) || {};
                const purchase = purchases[listingId];
                
                if (!purchase) return false;
                
                // Check if purchase is expired
                if (new Date(purchase.expiry) < new Date()) {
                    delete purchases[listingId];
                    localStorage.setItem('codeMarketPurchases', JSON.stringify(purchases));
                    return false;
                }
                
                return purchase;
            }

            // Get category name from slug
            function getCategoryName(slug) {
                const categories = {
                    'web': 'Web Development',
                    'mobile': 'Mobile Apps',
                    'game': 'Game Development',
                    'ai': 'AI & Machine Learning'
                };
                return categories[slug] || 'Other';
            }

            // Initialize the app
            init();
        });

        // Razorpay Payment Integration
        function initiatePayment(listingId, type) {
            const sampleListings = [
                {
                    id: 1,
                    title: 'Responsive E-commerce Website',
                    yearlyPrice: 9999,
                    price: 999999,
                    playUrl: 'https://github.com/themewagon/Fitness/archive/refs/tags/v1.0.0.zip',
                    category: 'web'
                },
                {
                    id: 2,
                    title: 'Pixel Art Camera',
                    yearlyPrice: 9999,
                    price: 199999,
                    playUrl: 'https://microstudio.io/gilles/pixelartcamera/',
                    category: 'mobile'
                },
                {
                    id: 3,
                    title: 'JerryAI Tool',
                    yearlyPrice: 9999,
                    price: 122999,
                    playUrl: 'https://novo0007.github.io/JerryAI/1.html',
                    category: 'ai'
                },
                {
                    id: 4,
                    title: 'Flappy 3 birds',
                    yearlyPrice: 8999,
                    price: 999999,
                    playUrl: 'https://microstudio.io/nnc1231/flappy3birds/2M3CC75V/',
                    category: 'game'
                },
                {
                    id: 5,
                    title: 'Marblequest',
                    yearlyPrice: 1999,
                    price: 299999,
                    playUrl: 'https://microstudio.io/nnc1231/marblequest/EVW43K2X/',
                    category: 'game'
                },
                {
                    id: 6,
                    title: 'Never Gonna Give You Up',
                    yearlyPrice: 0,
                    price: 0,
                    playUrl: 'https://youtu.be/dQw4w9WgXcQ?si=5h_oASyew87nDEHv',
                    category: 'web'
                },
                {
                    id: 7,
                    title: 'Netflix Free',
                    yearlyPrice: 299,
                    price: 4999,
                    playUrl: 'https://netfree.cc/mobile/movies',
                    category: 'mobile'
                },
                {
                    id: 8,
                    title: 'Image Background Remover',
                    yearlyPrice: 3999,
                    price: 49999,
                    playUrl: 'https://novo0007.github.io/rev/new/p1/rev.html',
                    category: 'ai'
                }
            ];
            
            const listing = sampleListings.find(item => item.id === listingId);
            if (!listing) return;

            const amount = type === 'yearly' ? listing.yearlyPrice : listing.price;
            const planName = type === 'yearly' ? 'Yearly Subscription' : 'One-Time Purchase';
            
            const options = {
                key: 'rzp_live_X4DZnSdUxCtfV8', // Replace with your Razorpay key
                amount: amount,
                currency: 'INR',
                name: 'CodeMarket',
                description: `${listing.title} - ${planName}`,
                image: 'https://via.placeholder.com/150',
                handler: function(response) {
                    recordPurchase(listingId, type, listing.playUrl);
                    showSuccessMessage(listing, response.razorpay_payment_id, type);
                },
                prefill: {
                    name: '',
                    email: '',
                    contact: ''
                },
                notes: {
                    address: 'CodeMarket Office',
                    product_id: listingId,
                    plan_type: type
                },
                theme: {
                    color: '#3498db'
                }
            };

            const rzp = new Razorpay(options);
            rzp.open();
            
            rzp.on('payment.failed', function(response) {
                showErrorMessage(response.error.description);
            });
        }

        // Record purchase in localStorage
        function recordPurchase(listingId, type, playUrl) {
            const purchases = JSON.parse(localStorage.getItem('codeMarketPurchases')) || {};
            const expiryDate = new Date();
            
            if (type === 'yearly') {
                expiryDate.setFullYear(expiryDate.getFullYear() + 1);
            } else {
                // For one-time purchases, set expiry 10 years in future (effectively permanent)
                expiryDate.setFullYear(expiryDate.getFullYear() + 10);
            }
            
            purchases[listingId] = {
                purchasedAt: new Date().toISOString(),
                expiry: expiryDate.toISOString(),
                type: type,
                playUrl: playUrl
            };
            
            localStorage.setItem('codeMarketPurchases', JSON.stringify(purchases));
        }

        // Show success message after payment
        function showSuccessMessage(listing, paymentId, type) {
            const purchaseStatusContent = document.getElementById('purchase-status-content');
            const codeDetailsModal = document.getElementById('code-details-modal');
            
            purchaseStatusContent.innerHTML = `
                <div class="purchase-status">
                    <div class="purchase-status-icon success">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>Payment Successful!</h3>
                    <p>Thank you for purchasing "${listing.title}". Your payment ID is ${paymentId}.</p>
                    <a href="${listing.playUrl}" class="play-now-btn" target="_blank">
                        <i class="fas fa-play"></i> ${listing.category === 'game' ? 'Play Now' : 'View Now'}
                    </a>
                    <p class="redirect-message">You will be redirected to the ${listing.category === 'game' ? 'game' : 'application'} page</p>
                </div>
            `;
            
            codeDetailsModal.classList.remove('active');
            document.getElementById('purchase-status-modal').classList.add('active');
        }

        // Show error message when payment fails
        function showErrorMessage(error) {
            const purchaseStatusContent = document.getElementById('purchase-status-content');
            
            purchaseStatusContent.innerHTML = `
                <div class="purchase-status">
                    <div class="purchase-status-icon error">
                        <i class="fas fa-times-circle"></i>
                    </div>
                    <div class="purchase-status-message">
                        <h2>Payment Failed</h2>
                        <p>${error || 'An unexpected error occurred. Please try again later.'}</p>
                    </div>
                </div>
            `;

            // Optionally, clear the message after a few seconds
            setTimeout(() => {
                purchaseStatusContent.innerHTML = '';
            }, 5000);
        }