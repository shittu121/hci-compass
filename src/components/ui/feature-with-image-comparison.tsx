import { useState, useRef, useEffect } from "react";
// import { Badge } from "@/components/ui/badge";
import { GripVertical, CheckCircle, XCircle } from "lucide-react";

interface FeatureProps {
  rightImage?: string;
  wrongImage?: string;
  rightImageAlt?: string;
  wrongImageAlt?: string;
  gripClassName?: string;
}

function Feature({
  rightImage = "",
  wrongImage = "",
  rightImageAlt = "feature8",
  wrongImageAlt = "darkmode-feature8.png",
  gripClassName,
}: FeatureProps) {
  const [inset, setInset] = useState<number>(50);
  const [dragging, setDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse/touch move handler
  const updateInset = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMouseMove = (e: MouseEvent) => {
      updateInset(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) updateInset(e.touches[0].clientX);
    };
    const stop = () => setDragging(false);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('mouseup', stop);
    document.addEventListener('touchend', stop);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mouseup', stop);
      document.removeEventListener('touchend', stop);
    };
  }, [dragging]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="pt-12 w-full flex justify-center">
            <div
              ref={containerRef}
              className="relative aspect-video w-full md:w-[35rem] h-96 overflow-visible rounded-2xl select-none"
            >
              {/* Wrong label/icon (left top) */}
              <div className="absolute top-2 left-4 flex items-center gap-1 z-30">
                <XCircle className="w-6 h-6 text-red-600" />
                <span className="text-sm font-semibold text-red-700">Wrong</span>
              </div>
              {/* Right label/icon (right top) */}
              <div className="absolute top-2 right-4 flex items-center gap-1 z-30">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Right</span>
              </div>
              {/* Divider line */}
              <div
                className="bg-muted h-full w-1 absolute z-20 top-0 select-none"
                style={{
                  left: inset + "%",
                }}
              />
              {/* Draggable handle, perfectly centered on image and divider */}
              <button
                className={gripClassName || "bg-gray-300 border left-1/2 border-gray-400 shadow rounded hover:scale-110 transition-all w-7 h-14 select-none absolute z-50 cursor-ew-resize flex justify-center items-center"}
                style={{
                  left: `${inset}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  margin: 0,
                }}
                onMouseDown={e => {
                  setDragging(true);
                  updateInset(e.clientX);
                }}
                onTouchStart={e => {
                  setDragging(true);
                  if (e.touches.length > 0) updateInset(e.touches[0].clientX);
                }}
                tabIndex={0}
                aria-label="Drag to compare images"
              >
                <GripVertical className="h-5 w-5 text-gray-700 select-none" />
              </button>
              <img
                src={rightImage}
                alt={rightImageAlt}
                className="absolute left-0 top-0 z-10 w-full md:w-[35rem] h-96 object-contain aspect-video rounded-2xl select-none"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              <img
                src={wrongImage}
                alt={wrongImageAlt}
                className="absolute left-0 top-0 w-full md:w-[35rem] object-contain h-96 aspect-video rounded-2xl select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
export default Feature;
