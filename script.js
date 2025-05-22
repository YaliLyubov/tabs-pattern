const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab_content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContent.forEach(content => content.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});