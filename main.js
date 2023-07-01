const tabsContainer = document.querySelector('.tabs-container');
const tabsList = tabsContainer.querySelector('ul');
const tabButtons = tabsList.querySelectorAll('a');
const tabPanels = tabsContainer.querySelectorAll('.tabs__panels > div');

// for assistive technology setup
tabsList.setAttribute("role", "tablist"); // assistive tech can spot this as a tablist.
// make the links (<a>'s) as tabs for tab buttons on keyboard
// two things to achieve that
tabsList.querySelectorAll('li').forEach((listitem) => {
    listitem.setAttribute("role", 'presentation');
});

tabButtons.forEach((tab, idx) => {
    tab.setAttribute("role", "tab");
    if (idx === 0) {
        // idx = 0 is the default panel that we show up on page load.
        tab.setAttribute("aria-selected", "true");
    }
    else {
        tab.setAttribute("tabindex", "-1");
        tabPanels[idx].setAttribute("hidden", "");
    }
});

// highlight the tabpanel upon tab selection
tabPanels.forEach((panel) => {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("tabindex", "0");
})

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

    // update the active panel when we select a new tab

    tabButtons.forEach((btn) => {
        btn.setAttribute("aria-selected", false);
        btn.setAttribute("tabindex", "-1");
    })

    newTab.setAttribute("aria-selected", true);
    newTab.setAttribute("tabindex", "0");
}
