/* Audit Platform
   Edit audit.js to change content.
   Edit CaseStudyLayout/CaseStudyHero/Chapter components to change structure.
   This file is isolated: changes here only affect this case study page. */

import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout.jsx';
import { audit } from '../../data/audit.js';

export default function AuditPage() {
  return <CaseStudyLayout data={audit} />;
}
