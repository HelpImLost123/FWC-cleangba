const list = document.getElementById("ft_list");
const button = document.getElementById("New")

window.addEventListener('DOMContentLoaded', loadTodos);

button.addEventListener('click', () => {
    const input = prompt('Enter TO DO:').trim();
    if (input && input !== '') {
        addTodo(input);
        saveCookies();
    }
});

function addTodo(text) {
    const div = document.createElement('div');
    div.textContent = text;

    div.addEventListener('click', () => {
        if (confirm(`Do you want to remove the "${div.textContent}" TO DO`)) {
            div.remove();
            saveCookies();
        }
    });

    list.insertBefore(div, list.firstChild);
}

function saveCookies() {
    const todo = [];
    const items = list.querySelectorAll('div');

    items.forEach(item => todo.push(item.textContent));

    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 1000));
    const expire = `expires=${d.toUTCString()}`;

    document.cookie = `todo_list=${encodeURIComponent(JSON.stringify(todo))}; ${expire}; path=/`;
}

function loadTodos() {
    const cookieValues = getCookies('todo_list');
    if (cookieValues) {
        try {
            const todos = JSON.parse(decodeURIComponent(cookieValues));

            for (let i = todos.length-1; i >= 0; i--) {
                addTodo(todos[i]);
            }
        } catch (e) {
            console.error('Error parsing cookies', e);
        }
    }
}

function getCookies(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return null;
}