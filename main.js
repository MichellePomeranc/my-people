const fetchUsers = () => {
    $.ajax(
        {
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/users`,
            success: (users) => {               
                $("#users").empty();
                const source = $("#user-template").html();
                const template = Handlebars.compile(source);
                const newHTML = template({users})
                $("#users").append(newHTML);
            },
            error: (xhr, text, error) => {
                alert("Couldn't get users.")
            }
        }
    );
}

fetchUsers();
