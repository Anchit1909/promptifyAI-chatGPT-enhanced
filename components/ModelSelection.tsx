import React from "react";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());
function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  return (
    <div>
      <Select
        className="mt-2"
        classNames={{
          control: (state) => `bg-[#434654] border-[#434654]`,
        }}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        defaultValue={model}
        placeholder={model}
        options={models?.modelOptions}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
