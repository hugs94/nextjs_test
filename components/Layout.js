import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
/**
 * Method 1
 */
const WithLayout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default WithLayout;

/**
 * Method 2
 */
// const withLayout = Page => {
//   return () => (
//     <div style={layoutStyle}>
//       <Header />
//       <Page />
//     </div>
//   );
// };
// export default withLayout;
