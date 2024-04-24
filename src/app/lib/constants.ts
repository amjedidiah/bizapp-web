export enum Links {
  Dashboard = "Dashboard",
  Pending = "Pending",
  Customers = "Customers",
  Chat = "Chat",
  Resolved = "Resolved",
  Templates = "Templates",
  Settings = "Settings",
  Logout = "Logout",
}

const DEFAULT_LINKS = {
  [Links.Logout]: {
    name: Links.Logout,
    pathname: "/",
  },
};

export const AgentLinks = {
  [Links.Dashboard]: {
    name: Links.Dashboard,
    pathname: "/agent",
  },
  [Links.Pending]: {
    name: Links.Pending,
    pathname: "/agent/pending",
  },
  [Links.Customers]: {
    name: Links.Customers,
    pathname: "/agent/customers",
  },
  [Links.Chat]: {
    name: Links.Chat,
    pathname: "/agent/chat",
  },
  [Links.Resolved]: {
    name: Links.Resolved,
    pathname: "/agent/resolved",
  },
  [Links.Templates]: {
    name: Links.Templates,
    pathname: "/agent/templates",
  },
  [Links.Settings]: {
    name: Links.Settings,
    pathname: "/agent/settings",
  },
  ...DEFAULT_LINKS,
};

enum SubLinks {
  Collaborations = "Collaborations",
}

export const AgentLinksChat = {
  [SubLinks.Collaborations]: "/agent/chat/collaborations",
};
