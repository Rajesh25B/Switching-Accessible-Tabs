const tabsContainer = document.querySelector('.tabs-container');
const tabsList = tabsContainer.querySelector('ul');
const tabButtons = tabsList.querySelectorAll('a');
const tabPanels = tabsContainer.querySelectorAll('.tabs__panels > div');

tabButtons.forEach((tab, idx) => {
    if (idx === 0) {
        // do something
    }
    else {
        tabPanels[idx].setAttribute("hidden", "");
    }
});
