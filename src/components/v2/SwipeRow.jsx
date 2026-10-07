// A horizontally swipeable row (tab bars on phones) with no scrollbar: the row fades out at
// whichever edge still has more to swipe to, and a round arrow button sits over that fade to
// slide the hidden items into view. The buttons sit outside the faded row so they stay crisp.
// Rows that fit (wide screens) show neither fades nor buttons.
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// `as` sets the row element (e.g. `ol` for a list), `variant` adds a modifier class to the
// wrapper (e.g. "clips" to centre the arrows on taller items), `labels` names the arrows.
export default function SwipeRow({
  as: Row = `div`,
  variant,
  labels,
  className = ``,
  children,
  isTh,
  ...props
}) {
  const ref = useRef(null);
  const [edges, setEdges] = useState({ start: false, end: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    function update() {
      frame = 0;
      const max = el.scrollWidth - el.clientWidth;
      setEdges({ start: el.scrollLeft > 2, end: max > 2 && el.scrollLeft < max - 2 });
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    el.addEventListener(`scroll`, schedule, { passive: true });
    const ro = new ResizeObserver(schedule);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener(`scroll`, schedule);
      ro.disconnect();
    };
  }, []);

  function slide(dir) {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: `smooth` });
  }

  return (
    <div className={`swipe-row${variant ? ` swipe-row--${variant}` : ``}`}>
      <Row
        ref={ref}
        className={`${className} edge-fade`}
        data-fade-start={edges.start || undefined}
        data-fade-end={edges.end || undefined}
        {...props}
      >
        {children}
      </Row>
      {/* the tabs themselves stay reachable by keyboard, so these are pointer-only helpers */}
      <button
        type={`button`}
        className={`swipe-row__btn is-prev ${edges.start ? `is-on` : ``}`}
        onClick={() => slide(-1)}
        tabIndex={-1}
        aria-hidden={`true`}
        title={labels?.prev ?? (isTh ? `ดูหมวดก่อนหน้า` : `Previous categories`)}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type={`button`}
        className={`swipe-row__btn is-next ${edges.end ? `is-on` : ``}`}
        onClick={() => slide(1)}
        tabIndex={-1}
        aria-hidden={`true`}
        title={labels?.next ?? (isTh ? `ดูหมวดถัดไป` : `More categories`)}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
