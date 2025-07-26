import datos from "../../data/data.js";
import Card from "../../components/Card/Card";
import { MainTitle } from "./HomePage.style";
import { useState } from "react";
import { Container } from "./HomePage.style";

function HomePage() {
  const [dataList, setDataList] = useState(() => {
    if (localStorage.getItem("whised")) {
      return JSON.parse(localStorage.getItem("whised"));
    } else {
      return [];
    }
  });

  const [data, setData] = useState(() => {
    if (localStorage.getItem("avaliable")) {
      return JSON.parse(localStorage.getItem("avaliable"));
    } else {
      return datos;
    }
  });

  function handleOnClick(id) {
    const updatedArray = data.filter((item) => item.book.ISBN !== id);
    setData(updatedArray);
    localStorage.setItem("avaliable", JSON.stringify(updatedArray));

    const newItemList = data.find((item) => item.book.ISBN === id);
    const newArrayList = [...dataList];
    newArrayList.push(newItemList);
    setDataList(newArrayList);
    localStorage.setItem("whised", JSON.stringify(newArrayList));
  }

  function handleOnClickRemove(id) {
    // 1. Filtrar fuera el libro de la lista de deseos
    const updatedWishList = dataList.filter((item) => item.book.ISBN !== id);
    setDataList(updatedWishList);
    localStorage.setItem("whised", JSON.stringify(updatedWishList));

    // 2. Encontrar el libro que vamos a devolver
    const returningBook = dataList.find((item) => item.book.ISBN === id);

    // 3. Añadirlo al array de disponibles
    const updatedAvailable = [...data, returningBook];
    setData(updatedAvailable);
    localStorage.setItem("avaliable", JSON.stringify(updatedAvailable));
  }

  return (
    <>
      <MainTitle>
        {" "}
        <h1>
          Bienvenido a tu biblioteca personal{" "}
          <img src="img/book.svg" alt="book icon" />
        </h1>
        <h3>Gestiona tus libros disponibles y tu lista de deseos</h3>
      </MainTitle>

      <Container>
        <div className="disponibles">
          <div className="header">
            <h1>Tienes {data.length} ejemplares disponibles</h1>
          </div>

          <div className="grid">
            {data.map((item, index) => (
              <div key={index} onClick={() => handleOnClick(item.book.ISBN)}>
                <Card
                  title={item.book.title}
                  genre={item.book.genre}
                  cover={item.book.cover}
                  author={item.book.author.name}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lista">
          <h1>Tienes {dataList.length} ejemplares en la lista de deseos</h1>
          <div className="grid-lista">
            {dataList.map((item, index) => (
              <div key={index}>
                <Card
                  title={item.book.title}
                  genre={item.book.genre}
                  cover={item.book.cover}
                  author={item.book.author.name}
                />
                <img
                  src="img/circle-x.svg"
                  title="Click to remove from wish list"
                  alt="Cerrar"
                  className="remove-icon"
                  onClick={() => handleOnClickRemove(item.book.ISBN)}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
