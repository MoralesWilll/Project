import { ChangeEvent, FormEvent, useState } from 'react';

// Definimos la interfaz de los datos de una card
interface Card {
  nombre: string;
  precio: string;
  habitaciones: string;
  banos: string;
  area: string;
  imagenes: File[];
}

const ProfilePage: React.FC = () => {
  // Estado para las cards creadas por el cliente
  const [clientCards, setClientCards] = useState<Card[]>([]);
  const [availableCards, setAvailableCards] = useState<Card[]>([]);
  
  // Estado para la nueva card
  const [newCard, setNewCard] = useState<Card>({
    nombre: '',
    precio: '',
    habitaciones: '',
    banos: '',
    area: '',
    imagenes: [],
  });

  // Manejo de cambios en el formulario
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === 'imagenes' && files) {
      setNewCard({ ...newCard, [name]: Array.from(files) });
    } else {
      setNewCard({ ...newCard, [name]: value });
    }
  };

  // Manejo del envío del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setClientCards([...clientCards, newCard]);
    setNewCard({
      nombre: '',
      precio: '',
      habitaciones: '',
      banos: '',
      area: '',
      imagenes: [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sección de información del perfil */}
      <section className="p-6">
        <h2 className="text-3xl font-bold mb-4">Perfil del Cliente</h2>
        <div className="flex items-center space-x-4">
          <img
            src="/ruta/a/imagen_perfil.jpg"
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full border-4 border-gray-700"
          />
          <div>
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Email:</strong> juan.perez@example.com</p>
            <p><strong>Teléfono:</strong> 123-456-7890</p>
          </div>
        </div>
      </section>

      {/* Sección de las cards creadas por el cliente */}
      <section className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Mis Cards</h3>
        <div className="space-y-4">
          {clientCards.length > 0 ? (
            clientCards.map((card, index) => (
              <div key={index} className="border border-gray-700 p-4 rounded-lg">
                <h4 className="text-xl font-semibold">{card.nombre}</h4>
                <p>Precio: {card.precio}</p>
                <p>Habitaciones: {card.habitaciones}</p>
                <p>Baños: {card.banos}</p>
                <p>Área: {card.area} m²</p>
                {/* Aquí podrías mostrar las imágenes subidas */}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No has creado ninguna card aún.</p>
          )}
        </div>
      </section>

      {/* Sección de las cards disponibles */}
      <section className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Cards Disponibles</h3>
        <div className="space-y-4">
          {availableCards.length > 0 ? (
            availableCards.map((card, index) => (
              <div key={index} className="border border-gray-700 p-4 rounded-lg">
                <h4 className="text-xl font-semibold">{card.nombre}</h4>
                <p>Precio: {card.precio}</p>
                <p>Habitaciones: {card.habitaciones}</p>
                <p>Baños: {card.banos}</p>
                <p>Área: {card.area} m²</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No hay cards disponibles en este momento.</p>
          )}
        </div>
      </section>

      {/* Formulario para crear una nueva card */}
      <section className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Crear una Nueva Card</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block">Nombre del lugar:</label>
            <input
              type="text"
              name="nombre"
              value={newCard.nombre}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-700 bg-gray-800 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label className="block">Precio:</label>
            <input
              type="number"
              name="precio"
              value={newCard.precio}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-700 bg-gray-800 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label className="block">Número de habitaciones:</label>
            <input
              type="number"
              name="habitaciones"
              value={newCard.habitaciones}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-700 bg-gray-800 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label className="block">Número de baños:</label>
            <input
              type="number"
              name="banos"
              value={newCard.banos}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-700 bg-gray-800 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label className="block">Área en metros cuadrados:</label>
            <input
              type="number"
              name="area"
              value={newCard.area}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-700 bg-gray-800 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label className="block">Imágenes:</label>
            <input
              type="file"
              name="imagenes"
              multiple
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 bg-gray-800 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md"
          >
            Crear Card
          </button>
        </form>
      </section>
    </div>
  );
};

export default ProfilePage;
