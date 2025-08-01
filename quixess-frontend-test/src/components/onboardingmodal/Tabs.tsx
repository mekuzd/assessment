type TabsProps = {
  steps: string[];
  currentStep: number;
};

export default function Tabs({ steps, currentStep }: TabsProps) {
  return (
    <div className="flex justify-between mt-[30px]">
      {steps.map((step:string, index:number) => {
        const isActive = currentStep === index + 1;
        return (
          <div
            key={step}
            className={`flex-1 text-center text-sm py-2 border-b-4 ${
              isActive ? "border-blue-800 font-bold" : "border-gray-300"
            }`}
          >
            {step}
          </div>
        );
      })}
    </div>
  );
}
