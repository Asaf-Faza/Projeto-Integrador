$(document).ready(function () {
    $(window).scroll(function () {
        // Verifica a posição do scroll
        if ($(this).scrollTop() > 50) { // Se a página foi rolada mais de 50 pixels
            $('.navbar').addClass('scrolled'); // Adiciona a classe 'scrolled'
        } else {
            $('.navbar').removeClass('scrolled'); // Remove a classe 'scrolled'
        }
    });
});

new DataTable('#clientes', {
    colReorder: true,
    responsive: true,
    language:{
        search:         "Buscar:",
        lengthMenu:     "_MENU_ elementos por página",
        info:           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    }
});
new DataTable('#fornecedor', {
    colReorder: true,
    responsive: true,
    language:{
        search:         "Buscar:",
        lengthMenu:     "_MENU_ elementos por página",
        info:           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    }
});
new DataTable('#produtos', {
    colReorder: true,
    responsive: true,
    language:{
        search:         "Buscar:",
        lengthMenu:     "_MENU_ elementos por página",
        info:           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    }
});
new DataTable('#vendedores', {
    colReorder: true,
    responsive: true,
    language:{
        search:         "Buscar:",
        lengthMenu:     "_MENU_ elementos por página",
        info:           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    }
});
new DataTable('#fluxo', {
    colReorder: true,
    responsive: true,
    language:{
        search:         "Buscar:",
        lengthMenu:     "_MENU_ elementos por página",
        info:           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    }
});
new DataTable('#dashboard', {
    colReorder: true,
    responsive: true,
    scrollY: '200px',
    language:{
        search:         "Buscar:",
        lengthMenu:     "_MENU_ elementos por página",
        info:           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    }
});
new DataTable('#dashboard2', {
    colReorder: true,
    responsive: true,
    scrollY: '200px',
    language:{
        search:         "Buscar:",
        lengthMenu:     "_MENU_ elementos por página",
        info:           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    }
});