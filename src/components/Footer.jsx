import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';

import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  }

  render() {
    const {
      supportedLanguages,
      onLanguageSelected,
      logo,
      intl,
    } = this.props;
    const showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
    const { config } = this.context;

    return (
      <footer
        role="contentinfo"
        className="footer d-flex border-top py-3 px-4"
      >
        <div className="container-fluid d-flex">
          <span>












          <nav class="nav-inline">
        <ol>
          <span><a href="/foreas">ΠΕΡΙ</a></span>
          <span><a href="/news">ΝΕΑ</a></span>
          <span><a href="/faq">ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ</a></span>
          <span><a href="/honor">ΟΡΟΙ ΧΡΗΣΗΣ</a></span>
          <span><a href="/privacy">ΠΡΟΣΩΠΙΚΑ ΔΕΔΟΜΕΝΑ</a></span>
          <span><a href="/contact">ΕΠΙΚΟΙΝΩΝΙΑ</a></span>
          <span><a href="https://pay.mathesis.org/el/payments/donate/">ΔΩΡΕΕΣ</a></span>
        </ol>
      </nav>

<div class="leftcol">
<font size="" style="color:#575757">© Mathesis</font>
<a target="_blank" href="http://open.edx.org"><img alt="Βασισμένο στο Open edX" src="/static/EuCup/images/openedx.png" width="100" style="margin-top: -6px;" title=""></a>

</div>


<div class="rightcol">
<a target="_blank" href="https://www.facebook.com/mathesisatcreteuniversitypress" class="share"><i class="icon fa fa-facebook-square"></i></a>
<a target="_blank" href="https://www.instagram.com/mathesis_cup/" class="share"><i class="icon fa fa-instagram"></i></a>
<a target="_blank" href="https://twitter.com/mathesiscup" class="share"><i class="icon fa fa-twitter-square"></i></a>
<a target="_blank" href="https://www.linkedin.com/company/mathesis-crete-university-press" class="share"> <i class="icon fa fa-linkedin-square"></i></a>
</div>
<div class="midcol">

<table style="margin-right:auto;margin-left:auto;"><tbody><tr>
<td style="vertical-align:middle;padding-right:20px;">
	<a target="_blank" href="http://www.cup.gr">
<img src="/static/EuCup/images/cupfl_o.svg" height="100px" />
</a></td>

<td style="vertical-align:middle; text-align: center;"><font size="-1.2">Με δωρεά από το</font><br><a target="_blank" href="http://www.snf.org/el/">

<img src="/c4x/edX/DemoX/asset/SNFv_o.svg" alt="ΙΔΡΥΜΑ ΣΤΑΥΡΟΣ ΝΙΑΡΧΟΣ" height="70px" />
</a></td>
	<td style="text-align:center; font-size:1.9em;width: 100px;">

</td></tr>
</tbody></table>
</div>
  





















          </span>
          <a
            className="d-block"
            href={config.LMS_BASE_URL}
            aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}
          >
            <img
              style={{ maxHeight: 45 }}
              src={logo || config.LOGO_TRADEMARK_URL}
              alt={intl.formatMessage(messages['footer.logo.altText'])}
            />
          </a>
          <div className="flex-grow-1" />
          {showLanguageSelector && (
            <LanguageSelector
              options={supportedLanguages}
              onSubmit={onLanguageSelected}
            />
          )}
        </div>
      </footer>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
