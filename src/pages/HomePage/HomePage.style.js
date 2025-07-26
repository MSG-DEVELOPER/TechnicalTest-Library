import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  background-image: url("/img/booksBackground.jpg");
  min-height: 100vh;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    font-size: 1.3rem;
    color: #1f2937;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
    text-align: center;
    background-color: #e0e7ff;
    border-radius: 8px;
    padding: 0.8rem;
  }

  .disponibles {
    width: 65%;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    background-image: url("img/avaliables.jpg");
  }

  .header {
    width: 100%;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  .lista {
  width: 30%;
  padding: 1rem;
  background-color: #3b8c88;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow-y: auto;
  max-height: 80vh;
  opacity: 0.95;
  background-image: url("img/whish.png");

  .remove-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: transform 0.2s ease, filter 0.2s ease;
    margin-top: -2rem;

    &:hover {
      transform: scale(1.2);
      filter: brightness(0) saturate(100%) invert(22%) sepia(95%) saturate(3166%) hue-rotate(336deg) brightness(89%) contrast(101%);
    }
  }

  .grid-lista {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  & > div {
    margin-bottom: 1.5rem;
  }
}

  /* 🔽 BREAKPOINT para pantallas menores de 830px */
  @media (max-width: 830px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .disponibles {
      width: 100%;
      padding: 0.5rem;
    }

    .grid {
      gap: 1rem;
    }

    .lista {
      width: 100%;
      padding: 0.5rem;
      max-height: none;
    }

    .grid-lista {
      gap: 0.5rem;
    }
  }
`;

export const MainTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;

  h1 {
    font-size: 2rem;
    color: #111827;
    margin-bottom: 0.5rem;
    text-shadow: 1px 1px 2px #cbd5e1;
  }

  h3 {
    font-size: 1.2rem;
    color: #374151;
    font-weight: normal;
    text-shadow: 1px 1px 2px #cbd5e1;
  }
`;
