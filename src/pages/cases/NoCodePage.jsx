/* No-Code Configurator
   Edit nocode.js to change content.
   Edit CaseStudyLayout/CaseStudyHero/Chapter components to change structure.
   This file is isolated: changes here only affect this case study page. */

import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout.jsx';
import { nocode } from '../../data/nocode.js';

export default function NoCodePage() {
  return <CaseStudyLayout data={nocode} />;
}
