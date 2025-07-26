import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 180px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
  padding: 1rem;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 360px; 

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const GenreText = styled.div`
  font-size: 0.85rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1.05rem;
  color: #222;
  margin-bottom: 0.5rem;
  min-height: 48px; 
  font-weight: 700;
  line-height: 1.2;
`;

export const Author = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: auto; 
  font-style: italic;
`;




