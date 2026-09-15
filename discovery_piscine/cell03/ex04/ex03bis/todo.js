$(window).on('DOMContentLoaded', loadTodos);

$("#New").on('click', function() {
    const input = prompt('Enter TO DO:').trim();
    if (input && input !== '') {
        addTodo(input);
        saveCookies();
    }
});

function addTodo(text) {
    const div = $('<div>').text(text);

    div.on('click', function() {
        if (confirm(`Do you want to remove the "${$(this).text()}" TO DO`)) {
            $(this).remove();
            saveCookies();
        }
    });

    $('#ft_list').prepend(div);
}

function saveCookies() {
    const todo = [];
    
    $('#ft_list div').each(function() {
        todo.push($(this).text());
    });

    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
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
        let c = $.trim(ca[i]);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return null;
}