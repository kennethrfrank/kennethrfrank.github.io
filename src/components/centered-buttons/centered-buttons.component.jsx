import { Component } from 'react'
import {Grid, Button, Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './centered-buttons.styles.css'

// class CenteredButtons extends Component{
//     render(){
//         const {buttons, socials} = this.props;
//         return(
//             <Grid.Row centered columns={socials.length+1} >

         
//             {socials.map((social)=>{
              
//               return(
//                 <Grid.Column key={social.platform} className="theButtons" textAlign="center">
//                   <Button fluid className="blackButton" href={social.link} icon={social.platform}></Button>
//                 </Grid.Column>
//               );
//             })}
           
//           </Grid.Row>
          
//         )
//     }
// }

const CenteredButtons = ({ socials }) => {
  // Helper builds an href for the button. If `social.email` is provided
  // we construct a mailto: link optionally including subject/body.
  // Otherwise we fall back to `social.link` if present.
  const buildHref = (social) => {
    // If explicit mailto link provided, use it as-is
    if (social.link && typeof social.link === 'string' && social.link.startsWith('mailto:')) {
      return social.link;
    }

    // If an email address is provided, build a mailto link. Use `name`,
    // `subject`, and `body` fields to prefill the email where available.
    if (social.email) {
      const to = social.email;
      const subject = social.subject || (social.name ? `Message for ${social.name}` : '');
      // If `name` is present and you'd like that in the body, include it.
      const body = social.body || (social.name ? `Hi ${social.name},%0D%0A%0D%0A` : '');
      const params = [];
      if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
      if (body) params.push(`body=${encodeURIComponent(body)}`);
      return `mailto:${to}${params.length ? '?' + params.join('&') : ''}`;
    }

    // Otherwise, default to the provided link (or '#')
    return social.link || '#';
  };

  return (
    <Grid className="topLogoRow">
      <Grid.Row centered columns={socials.length + 1} className="socialButtons">

        {socials.map((social) => {
          const href = buildHref(social);
          // If the link is a mailto or same-origin link, opening in the same
          // tab is fine. For external web links, it's common to open in a new tab.
          const external = href && typeof href === 'string' && !href.startsWith('mailto:') && !href.startsWith('#') && !href.startsWith(window.location.origin) && !href.startsWith('/');

          const hasIcon = !!social.platform;
          return (
            <Grid.Column key={social.platform + social.text} className="theButtons" textAlign="center">
              <Button
                as="a"
                href={href}
                fluid
                className="blackButton"
                labelPosition={hasIcon ? 'left' : undefined}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                {hasIcon && <Icon name={social.platform} />}
                {social.text}
              </Button>
            </Grid.Column>
          );
        })}

      </Grid.Row>
    </Grid>
  );
};

export default CenteredButtons;

//TODO: MAKE THIS WORK FOR EITHER ICONS OR NAMED BUTTONS