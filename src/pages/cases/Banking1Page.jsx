/* Banking App Part 1 — Sprint Delivery
   Edit banking1.js to change content.
   Edit CaseStudyLayout/CaseStudyHero/Chapter components to change structure.
   This file is isolated: changes here only affect this case study page. */

import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout.jsx';
import { banking1 } from '../../data/banking1.js';

export default function Banking1Page() {
  return <CaseStudyLayout data={banking1} />;
}
