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

tabsContainer.addEventListener("click", (event) => {
    event.preventDefault();

    const clickedTab = event.target.closest('a'); // To know which tab user was clicked
    if (!clickedTab) {
        return;
    } // returns null if click happens outside of anchor tags, prevent null value showing.

    switchTab(clickedTab)
});

function switchTab(newTab) {
    // get active panel upon tab selection
    const activePanelId = newTab.getAttribute('href'); // returns href of each tab
    const activePanel = tabsContainer.querySelector(activePanelId);

    // loop through each panel and make them hidden
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });
    // upon selection of a single panel, remove href attribute of hidden on that panel
    activePanel.removeAttribute("hidden")
}