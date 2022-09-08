import styled from "@emotion/styled";

export const RenderedHTML = styled.div`
   font-size: 1.2em;
   color: #2C2C2C;
   font-family: Cormorant serif;
   h1 {
      display: block;
      font-size: 2em;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
   }
   h2 {
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
   }
   h3 {
      display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
   }
   h4 {
      display: block;
      margin-block-start: 1.33em;
      margin-block-end: 1.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
   }
   h5 {
      display: block;
      margin-block-start: 1.33em;
      margin-block-end: 1.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
   }
   h6 {
      display: block;
      font-size: 0.67em;
      margin-block-start: 2.33em;
      margin-block-end: 2.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
   }
   p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      text-align: justify;
   }
   a {
      color: #5f7760;
      text-decoration: underline;
      text-decoration-color: #b2a384;
      text-decoration-thickness: 3px;
      cursor: pointer;
      &:hover {
         background-color: #f1e6ea;
      }
   }
   b,
   strong {
      font-weight: bold;
   }
   ol {
      list-style-type: decimal;
   }
   ul {
      list-style-type: disc;
   }
   li {
      display: list-item;
      text-align: -webkit-match-parent;
   }
`;
