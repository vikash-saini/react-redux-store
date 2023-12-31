import styled,{ css } from 'styled-components';

export const Title =styled.a({
    textDecoration:'none',
    fontSize:'30px',
    });

// Equivalent to:
// const Title =styled.a`
// text-decoration:none;
// font-size:30px;
// `;


// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
  
export const HeaderWrapper = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom:'1px solid rgba(0,0,0,0.5)'
  });

export const Button = styled.a`
  --accent-color: white;
  border-radius: 3px
  border: 1px solid var(--accent-color);
  display: inline-block;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: brightness(0.85);
  }


  &:active {
    filter: brightness(1);
  }

    background: var(--accent-color);
    color: black;
`

export const MenuButton=styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid #BF4F74;
color: #BF4F74;
margin: 0.5em 1em;
padding: 0.25em 1em;

${props => props.$primary && css`
  background: #BF4F74;
  color: white;
`}
`;

export const SearchInput=styled.input`
padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$inputColor || "#BF4F74"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width:360px;
  @media(max-width:400px){
    width:auto;
  }
`