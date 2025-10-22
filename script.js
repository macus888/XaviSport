const productos = [
  {
    nombre: "Real Madrid",
    precio: 29.99,
    imagen: "images/camiseta1.jpg",
    categoria: "europeos"
  },
  {
    nombre: "Barcelona",
    precio: 27.99,
    imagen: "images/camiseta2.jpg",
    categoria: "europeos"
  },
  {
    nombre: "Boca Juniors",
    precio: 25.99,
    imagen: "images/camiseta3.jpg",
    categoria: "latinoamericanos"
  },
  {
    nombre: "Edición Retro",
    precio: 35.99,
    imagen: "images/camiseta4.jpg",
    categoria: "especiales"
  }
];

const catalogo = document.getElementById("catalogo");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");

function mostrarProductos(categoria = null) {
  catalogo.innerHTML = "";
  const filtrados = categoria ? productos.filter(p => p.categoria === categoria) : productos;
  filtrados.forEach(producto => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <img src="\${producto.imagen}" alt="Camiseta de \${producto.nombre}">
      <h3>\${producto.nombre}</h3>
      <p>Precio: $\${producto.precio}</p>
      <button>Comprar</button>
    `;
    catalogo.appendChild(div);
  });
}

document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const categoria = this.getAttribute("data-categoria");
    mostrarProductos(categoria);
    sidebar.classList.remove("active");
  });
});

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

mostrarProductos();
