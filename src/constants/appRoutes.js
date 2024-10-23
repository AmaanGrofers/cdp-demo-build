import {
  DatabaseOutlined,
  PartitionOutlined,
  DeploymentUnitOutlined,
  AimOutlined,
  AlertOutlined,
  SyncOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export const appRoutes = {
  dataSources: "/data-sources",
  segments: "/segments",
  attributes: "/attributes",
  destinations: "/destinations",
  destinationSyncs: "/destination-syncs",
  alerts: "/alerts",
  settings: "/settings",
};

export const routeIcons = {
  dataSources: DatabaseOutlined,
  segments: PartitionOutlined,
  attributes: DeploymentUnitOutlined,
  destinations: AimOutlined,
  destinationSyncs: SyncOutlined,
  alerts: AlertOutlined,
  settings: SettingOutlined,
};

export const segmentRoutes = {
  createSegment: "/segments/create-segment",
  defineSegment: "/segments/define-segment",
};

export const userRoutes = {
  login: "/login",
  pageNotFound: "/404",
};
