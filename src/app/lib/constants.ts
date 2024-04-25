export enum CustomerStatus {
  Attending = "attending",
  Booked = "booked",
  Cancelled = "cancelled",
  CheckedIn = "checked in",
  Closed = "closed",
  Discharged = "discharged",
  Pending = "pending",
}

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
    title: Links.Logout,
  },
};

export const AgentLinks = {
  [Links.Dashboard]: {
    name: Links.Dashboard,
    pathname: "/agent",
    title: Links.Dashboard,
  },
  [Links.Pending]: {
    name: Links.Pending,
    pathname: "/agent/pending",
    title: `${Links.Pending} Requests`,
  },
  [Links.Customers]: {
    name: Links.Customers,
    pathname: "/agent/customers",
    title: Links.Customers,
  },
  [Links.Chat]: {
    name: Links.Chat,
    pathname: "/agent/chat",
    title: Links.Chat,
  },
  [Links.Resolved]: {
    name: Links.Resolved,
    pathname: "/agent/resolved",
    title: `${Links.Resolved} Cases`,
  },
  [Links.Templates]: {
    name: Links.Templates,
    pathname: "/agent/templates",
    title: Links.Templates,
  },
  [Links.Settings]: {
    name: Links.Settings,
    pathname: "/agent/settings",
    title: Links.Settings,
  },
  ...DEFAULT_LINKS,
};

export enum ChatLinks {
  Collaborations = "Collaborations",
  Customers = "Customers",
  Escalations = "Escalations",
}

export const AgentLinksChat = {
  [ChatLinks.Collaborations]: "/agent/chat/collaborations",
  [ChatLinks.Customers]: "/agent/chat/customers",
  [ChatLinks.Escalations]: "/agent/chat/escalations",
};

export enum SettingsLinks {
  Account = "Account",
  Security = "Security",
}

export const AgentLinksSettings = {
  [SettingsLinks.Account]: {
    name: SettingsLinks.Account,
    href: "/agent/settings/account",
  },
  [SettingsLinks.Security]: {
    name: SettingsLinks.Security,
    href: "/agent/settings/security",
  },
};

export enum SettingsSecurityLinks {
  EmailPreference = "Email Preference",
  AccountPassword = "Account Password",
}

export const AgentLinksSettingsSecurity = {
  [SettingsSecurityLinks.EmailPreference]: {
    name: SettingsSecurityLinks.EmailPreference,
    href: "/agent/settings/security/email-preference",
  },
  [SettingsSecurityLinks.AccountPassword]: {
    name: SettingsSecurityLinks.AccountPassword,
    href: "/agent/settings/security/account-password",
  },
};
