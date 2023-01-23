// import '../Stylingcomponents/Nav.css'
type LinkSocialProps = {
    content: string;
    link: string;
  };
  
  function LinkSocial({ content, link }: LinkSocialProps) {
    return (
      <>
        <a href={link}>{content}</a>
      </>
    );
  }
  export default LinkSocial;