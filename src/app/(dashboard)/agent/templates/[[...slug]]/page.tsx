import AgentTemplateList from "@/components/agent/agent-template-list";
import SearchForm from "@/components/shared/search-form";
import TemplateBody from "@/components/agent/template-body";
import DashboardMainBody from "@/components/shared/dashboard-main-body";

export default function AgentTemplates() {
  return (
    <DashboardMainBody className="lg:grid-cols-2 flex-1 lg:overflow-hidden lg:pb-0">
      <div className="flex flex-col flex-1 lg:overflow-hidden gap-[30px] lg:border-r border-gray-9">
        <SearchForm
          placeholder="Search"
          className="p-[10px]  min-w-[calc(100%-48px)]"
        />
        <div className="flex-1 w-full lg:overflow-auto pr-5 lg:pr-12">
          <div className="flex flex-col py-3 px-1 gap-[6px]">
            <AgentTemplateList />
          </div>
        </div>
      </div>
      <TemplateBody />
    </DashboardMainBody>
  );
}
