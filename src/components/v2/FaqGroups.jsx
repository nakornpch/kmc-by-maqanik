// Every FAQ group (site.jsx faqGroups) in the v2 FAQ style: per group, a sticky intro column and
// its questions; answers keep their branch cards and follow-up links. Used on /faq and /blog.
import { ArrowUpRight, Phone, Plus } from "lucide-react";
import { AnimatedHeading, i as faqGroups } from "../../site.jsx";
import { SmartLink } from "./kit.jsx";

function FaqLink({ link, isTh }) {
  const isTel = link.href?.startsWith("tel:");
  return <SmartLink to={link.to} href={link.href}>{isTh ? link.th : link.en}{isTel ? <Phone size={14} /> : <ArrowUpRight size={14} />}</SmartLink>;
}

function Branch({ branch, isTh }) {
  const text = isTh ? branch.th : branch.en;
  return <div className="kv2-branch">
    <h4>{text.name}</h4><p>{text.note}</p><p>{text.address}</p>
    {branch.fromPrice && <strong>{isTh ? `เริ่มต้น ${branch.fromPrice.toLocaleString("en-US")} บาท/เดือน` : `From ฿${branch.fromPrice.toLocaleString("en-US")}/month`}</strong>}
    <div className="kv2-links">
      <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer">{isTh ? "ดูแผนที่" : "Map"}<ArrowUpRight size={14} /></a>
      {branch.detailUrl && <a href={branch.detailUrl} target="_blank" rel="noopener noreferrer">{isTh ? "รายละเอียดสาขา" : "Branch details"}<ArrowUpRight size={14} /></a>}
    </div>
  </div>;
}

export default function FaqGroups({ isTh, groups = faqGroups }) {
  return groups.map((group, index) => <section key={group.key} id={`faq-${group.key}`} className="sr-wrap sr-faq" data-sr-reveal>
    <div>
      <span className="sr-num" aria-hidden="true">0{index + 1}</span>
      <p className="sr-eyebrow">{group.en.toUpperCase()}</p>
      <AnimatedHeading as="h2" text={isTh ? group.th : group.en} />
      <p>{isTh ? `${group.items.length} คำถาม` : `${group.items.length} questions`}</p>
    </div>
    <div data-sr-stagger>{group.items.map((item) => {
      const text = isTh ? item.th : item.en;
      return <details key={item.key} name={`faq-${group.key}`}>
        <summary>{text.q}<Plus size={20} /></summary>
        <div className="kv2-answer">
          <p>{text.a}</p>
          {item.branches?.length > 0 && <div className="kv2-branches">{item.branches.map((branch) => <Branch key={branch.key} branch={branch} isTh={isTh} />)}</div>}
          {item.links?.length > 0 && <div className="kv2-links">{item.links.map((link) => <FaqLink key={link.to || link.href} link={link} isTh={isTh} />)}</div>}
        </div>
      </details>;
    })}</div>
  </section>);
}
