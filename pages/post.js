import { withRouter } from 'next/router';
import WithLayout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';

// const Page = withRouter(props => (
//   <WithLayout>
//     <h1>{props.router.query.title}</h1>
//     <p>This is blog post content</p>
//   </WithLayout>
// ));

// const Content = withRouter(props => {
//   return (
//     <div>
//       <p>This is the blog post content.</p>
//       <h1>{props.props.show.name}</h1>
//       <p>{props.props.show.summary.replace(/<[/]?p>/g, '')}</p>
//       <img src={props.props.show.image.medium} />
//     </div>
//   );
// });

// const Post = props => (
//   <WithLayout>
//     <Content props={props} />
//   </WithLayout>
// );

// Post.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.name}`);

//   return { show };
// };

// export default Post;

/**
 * Global Styles Work
 * Yep that worked well. It worked, because our styles applied globally.
 * While this feature can be incredibly handy, we always recommend trying
 * to write scoped styles (without the global prop).
 * Still, this is a great solution over normal style tags.
 * With styled-jsx all necessary prefixing and CSS validation is done
 *  inside a babel plugin, so there is no additional runtime overhead.
 */

export default withRouter(props => (
  <WithLayout>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Markdown
        source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}
      />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </WithLayout>
));
