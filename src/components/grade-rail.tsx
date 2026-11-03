import { gradeLabel, grades, type Grade } from "@/lib/desk";
import { cn } from "cn";

const tone: Record<Grade, string> = {
  budget: "bg-clay",
  mid: "bg-palm",
  upper: "bg-foreground",
  luxury: "bg-brass",
};

export function GradeRail({ active }: { active: Grade[] }) {
  return (
    <div>
      <div className="flex gap-1" aria-hidden>
        {grades.map((grade) => (
          <span
            key={grade}
            className={cn(
              "h-1.5 flex-1 rounded-full",
              active.includes(grade) ? tone[grade] : "bg-border"
            )}
          />
        ))}
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground">
        {active.map((grade) => gradeLabel[grade]).join(" · ")}
      </p>
    </div>
  );
}
