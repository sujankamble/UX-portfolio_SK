/* MES Application
   Edit mes.js to change content.
   Edit CaseStudyLayout/CaseStudyHero/Chapter components to change structure.
   This file is isolated: changes here only affect this case study page. */

import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout.jsx';
import { mes } from '../../data/mes.js';

export default function MESPage() {
  return <CaseStudyLayout data={mes} />;
}
