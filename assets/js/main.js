tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
            }
        }
    }
}

window.addEventListener('load', function () {
    // Event listener to toggle theme
    const toggleSwitch = document.querySelectorAll('.toggle-view');

    function handleToggle(e) {
        const _t = e.currentTarget;

        if (_t.classList.contains('active')) {
            return;
        }

        if (_t.attributes['data-view'].value === 'dark') {
            toggleSwitch[0].classList.remove('active');
            _t.classList.add('active');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            toggleSwitch[1].classList.remove('active');
            _t.classList.add('active');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.forEach(function (el) {
        el.addEventListener('click', handleToggle);
    });
});