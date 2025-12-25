/**
 * Carousel functionality for research project page
 * Handles navigation, filtering, and page indicators for carousel components
 */

(function() {
    'use strict';

    /**
     * Initialize carousel functionality
     * @param {string} carouselId - ID of the carousel container
     */
    function initCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const slider = carousel.querySelector('.x-carousel-slider');
        const allItems = carousel.querySelectorAll('.x-carousel-slider-item');
        const prevBtn = carousel.querySelector('.x-carousel-nav .x-carousel-switch:first-child');
        const nextBtn = carousel.querySelector('.x-carousel-nav .x-carousel-switch:last-child');
        const pages = carousel.querySelectorAll('.x-carousel-page');
        const tags = carousel.querySelectorAll('.x-carousel-tag');

        if (!slider || !allItems.length) return;

        let currentIndex = 0;
        let currentFilter = 'all'; // Current filter: 'all', 'class1', 'class2', 'class3'
        let filteredItems = Array.from(allItems); // Currently visible items

        /**
         * Filter items by tag
         * @param {string} filter - Filter value: 'all', 'class1', 'class2', 'class3'
         */
        function filterItems(filter) {
            currentFilter = filter;
            
            // Filter items based on data-tag attribute
            if (filter === 'all') {
                filteredItems = Array.from(allItems);
            } else {
                filteredItems = Array.from(allItems).filter(item => {
                    return item.getAttribute('data-tag') === filter;
                });
            }

            // Reset to first item after filtering
            currentIndex = 0;
            
            // Update visibility of all items
            allItems.forEach(item => {
                if (filteredItems.includes(item)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Show first filtered item
            goToSlide(0);
            updatePages();
        }

        /**
         * Navigate to a specific slide (within filtered items)
         * @param {number} index - Index of the slide to show
         */
        function goToSlide(index) {
            const totalItems = filteredItems.length;
            currentIndex = Math.max(0, Math.min(index, totalItems - 1));

            // Hide all filtered items
            filteredItems.forEach(item => {
                item.style.display = 'none';
            });

            // Show current item - use block instead of flex to preserve card's flex layout
            if (filteredItems[currentIndex]) {
                filteredItems[currentIndex].style.display = 'block';
            }

            updatePages();
            updateButtons();
        }

        /**
         * Update page indicators to reflect current slide
         */
        function updatePages() {
            const totalItems = filteredItems.length;
            pages.forEach((page, index) => {
                if (index === currentIndex && index < totalItems) {
                    page.classList.add('x-carousel-page-active');
                } else {
                    page.classList.remove('x-carousel-page-active');
                }
            });
            
            // Hide unused page indicators
            pages.forEach((page, index) => {
                if (index >= totalItems) {
                    page.style.display = 'none';
                } else {
                    page.style.display = '';
                }
            });
        }

        /**
         * Update navigation buttons state (enable/disable at boundaries)
         */
        function updateButtons() {
            const totalItems = filteredItems.length;
            if (prevBtn) {
                prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
                prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
            }
            if (nextBtn) {
                nextBtn.style.opacity = currentIndex === totalItems - 1 ? '0.3' : '1';
                nextBtn.style.cursor = currentIndex === totalItems - 1 ? 'not-allowed' : 'pointer';
            }
        }

        /**
         * Tag filtering (only for results-gen carousel)
         */
        if (tags.length && carouselId === 'results-gen') {
            tags.forEach((tag) => {
                tag.addEventListener('click', function() {
                    const filter = tag.getAttribute('data-filter');
                    if (!filter) return;
                    
                    // Remove active class from all tags
                    tags.forEach(t => t.classList.remove('active'));
                    // Add active class to clicked tag
                    tag.classList.add('active');
                    // Filter items
                    filterItems(filter);
                });
            });
        }

        // Previous/Next buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                if (currentIndex > 0) {
                    goToSlide(currentIndex - 1);
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                const totalItems = filteredItems.length;
                if (currentIndex < totalItems - 1) {
                    goToSlide(currentIndex + 1);
                }
            });
        }

        // Page indicators - click to jump to specific slide
        pages.forEach((page, index) => {
            page.addEventListener('click', function() {
                goToSlide(index);
            });
        });

        // Initialize - filter to 'all' and show first item
        filterItems('all');
    }

    // Initialize all carousels when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initCarousel('results-gen');
        initCarousel('results-recon');
    });
})();


document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 预先创建一个用于显示图片的容器（一开始隐藏）
    const promptImgContainer = document.createElement('div');
    promptImgContainer.id = 'glb-prompt-image-container';
    promptImgContainer.style.cssText = `
        position: fixed; 
        bottom: 20px; 
        right: 20px; 
        width: 200px; 
        height: 200px; 
        z-index: 10000; /* 保证在最上层 */
        display: none; /* 默认隐藏 */
        background-color: white;
        padding: 5px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        cursor: pointer; /* 提示可点击关闭 */
    `;
    
    // 创建图片元素
    const promptImg = document.createElement('img');
    promptImg.style.cssText = `
        width: 100%; 
        height: 100%; 
        object-fit: contain; 
        display: block;
    `;
    promptImgContainer.appendChild(promptImg);

    // 添加关闭提示文字（可选）
    const closeTip = document.createElement('div');
    closeTip.innerText = "Click to close";
    closeTip.style.cssText = "position:absolute; top:-25px; right:0; color:white; font-size:12px; background:rgba(0,0,0,0.5); padding:2px 5px; border-radius:4px;";
    promptImgContainer.appendChild(closeTip);

    document.body.appendChild(promptImgContainer);

    // 点击图片容器时，自己隐藏
    promptImgContainer.addEventListener('click', function() {
        this.style.display = 'none';
    });


    // 2. 为所有的 View GLB 按钮添加点击事件
    const buttons = document.querySelectorAll('.x-button');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 获取 HTML 中定义的 data-prompt 属性 (assets/images/1.png)
            const imgUrl = this.getAttribute('data-prompt');
            
            if (imgUrl) {
                promptImg.src = imgUrl;
                promptImgContainer.style.display = 'block'; // 显示图片
            }
        });
    });

    // 3. (可选) 如果你的 GLB 查看器有“关闭”按钮（例如 class 为 .close-viewer），
    // 你需要在这里添加逻辑，让点击关闭查看器时，图片也跟着消失。
    // 假设关闭按钮的类名是 .close-btn (你需要确认实际类名)
    /*
    const closeGlbBtn = document.querySelector('.close-btn-class-name');
    if(closeGlbBtn) {
        closeGlbBtn.addEventListener('click', () => {
             promptImgContainer.style.display = 'none';
        });
    }
    */
});