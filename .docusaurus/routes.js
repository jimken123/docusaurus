import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus/__docusaurus/debug',
    component: ComponentCreator('/docusaurus/__docusaurus/debug', '324'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/config',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/config', 'fe4'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/content',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/content', '572'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/globalData',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/globalData', 'aab'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/metadata',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/metadata', 'ca1'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/registry',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/registry', 'f2e'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/routes',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/routes', '75c'),
    exact: true
  },
  {
    path: '/docusaurus/blog',
    component: ComponentCreator('/docusaurus/blog', 'fb2'),
    exact: true
  },
  {
    path: '/docusaurus/blog/archive',
    component: ComponentCreator('/docusaurus/blog/archive', '33c'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors',
    component: ComponentCreator('/docusaurus/blog/authors', 'd06'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors/footeam',
    component: ComponentCreator('/docusaurus/blog/authors/footeam', '66c'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors/jimkennedy',
    component: ComponentCreator('/docusaurus/blog/authors/jimkennedy', 'b3c'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags',
    component: ComponentCreator('/docusaurus/blog/tags', 'd3e'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/ProductName',
    component: ComponentCreator('/docusaurus/blog/tags/ProductName', '3c4'),
    exact: true
  },
  {
    path: '/docusaurus/blog/v25.1.5',
    component: ComponentCreator('/docusaurus/blog/v25.1.5', '4af'),
    exact: true
  },
  {
    path: '/docusaurus/blog/v25.1.6',
    component: ComponentCreator('/docusaurus/blog/v25.1.6', 'a1e'),
    exact: true
  },
  {
    path: '/docusaurus/search',
    component: ComponentCreator('/docusaurus/search', '2b2'),
    exact: true
  },
  {
    path: '/docusaurus/upgrade-guide',
    component: ComponentCreator('/docusaurus/upgrade-guide', 'fd9'),
    exact: true
  },
  {
    path: '/docusaurus/upgrade-guide/authors',
    component: ComponentCreator('/docusaurus/upgrade-guide/authors', '7f7'),
    exact: true
  },
  {
    path: '/docusaurus/upgrade-guide/authors/footeam',
    component: ComponentCreator('/docusaurus/upgrade-guide/authors/footeam', '733'),
    exact: true
  },
  {
    path: '/docusaurus/upgrade-guide/authors/jimkennedy',
    component: ComponentCreator('/docusaurus/upgrade-guide/authors/jimkennedy', 'ea0'),
    exact: true
  },
  {
    path: '/docusaurus/docs',
    component: ComponentCreator('/docusaurus/docs', '8cb'),
    routes: [
      {
        path: '/docusaurus/docs/next',
        component: ComponentCreator('/docusaurus/docs/next', '831'),
        routes: [
          {
            path: '/docusaurus/docs/next',
            component: ComponentCreator('/docusaurus/docs/next', 'd90'),
            routes: [
              {
                path: '/docusaurus/docs/next/category/lorem',
                component: ComponentCreator('/docusaurus/docs/next/category/lorem', '183'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/next/lorem/ADDONS_USER_GUIDE',
                component: ComponentCreator('/docusaurus/docs/next/lorem/ADDONS_USER_GUIDE', '71f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/next/lorem/BAREMETAL_MANAGEMENT',
                component: ComponentCreator('/docusaurus/docs/next/lorem/BAREMETAL_MANAGEMENT', '438'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/next/lorem/BLOCK_STORAGE_SETUP',
                component: ComponentCreator('/docusaurus/docs/next/lorem/BLOCK_STORAGE_SETUP', 'a4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/next/lorem/GPU_SERVER_VERIFICATION',
                component: ComponentCreator('/docusaurus/docs/next/lorem/GPU_SERVER_VERIFICATION', '319'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/next/lorem/KUBERNETES_CLUSTER_REFERENCE',
                component: ComponentCreator('/docusaurus/docs/next/lorem/KUBERNETES_CLUSTER_REFERENCE', 'ca7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/next/lorem/OBSERVABILITY',
                component: ComponentCreator('/docusaurus/docs/next/lorem/OBSERVABILITY', '548'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/next/lorem/PUBLIC-IP-ACCESS',
                component: ComponentCreator('/docusaurus/docs/next/lorem/PUBLIC-IP-ACCESS', 'f24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/next/lorem/VPN_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/next/lorem/VPN_CONFIGURATION', 'cdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docusaurus/docs/v25.1.5',
        component: ComponentCreator('/docusaurus/docs/v25.1.5', 'b76'),
        routes: [
          {
            path: '/docusaurus/docs/v25.1.5',
            component: ComponentCreator('/docusaurus/docs/v25.1.5', 'e94'),
            routes: [
              {
                path: '/docusaurus/docs/v25.1.5/category/key-rotation-runbooks',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/category/key-rotation-runbooks', '478'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/category/observability',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/category/observability', '75f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/category/runbooks',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/category/runbooks', 'e8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/category/service-operator',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/category/service-operator', '8dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/category/software-update-runbooks',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/category/software-update-runbooks', '11e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/category/user',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/category/user', '660'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/license',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/license', 'd88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/ADDONS_API_REFERENCE',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/ADDONS_API_REFERENCE', 'd9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/ADDONS_OPERATOR_GUIDE',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/ADDONS_OPERATOR_GUIDE', '681'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/AZURE_SSO_SETUP',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/AZURE_SSO_SETUP', '3b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/BIOS_BMC_SETUP',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/BIOS_BMC_SETUP', '54a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/CAPI_MANAGEMENT_CLUSTER',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/CAPI_MANAGEMENT_CLUSTER', 'b1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/CEPH_SETUP',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/CEPH_SETUP', 'ed9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/DEPLOYMENT',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/DEPLOYMENT', 'bf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/GHCR_AUTHENTICATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/GHCR_AUTHENTICATION', 'f37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/GOOGLE_SSO_SETUP',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/GOOGLE_SSO_SETUP', '29d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/IAAS_CONSOLE_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/IAAS_CONSOLE_CONFIGURATION', '454'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/INSTALL_BAREMETAL_NODE',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/INSTALL_BAREMETAL_NODE', '96d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/IPMI_SNMP_OBSERVABILITY_SETUP',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/IPMI_SNMP_OBSERVABILITY_SETUP', '2c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/KEY_MANAGEMENT_POLICY',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/KEY_MANAGEMENT_POLICY', '13d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/MANAGEMENT_TLS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/MANAGEMENT_TLS', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/NETWORK_CONTROL_NODE_SETUP',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/NETWORK_CONTROL_NODE_SETUP', '5b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/observability/OBSERVABILITY_ALERTS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/observability/OBSERVABILITY_ALERTS', '06c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/observability/OBSERVABILITY_DASHBOARDS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/observability/OBSERVABILITY_DASHBOARDS', '5df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/observability/OBSERVABILITY_STORAGE',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/observability/OBSERVABILITY_STORAGE', '048'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/OPERATOR_API_GUIDE',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/OPERATOR_API_GUIDE', '25b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/OPERATOR_OVERVIEW',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/OPERATOR_OVERVIEW', '6af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/OPERATOR_VPN_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/OPERATOR_VPN_CONFIGURATION', 'c30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/OS_REQUIREMENTS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/OS_REQUIREMENTS', '5cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/PUBLIC_IP_ACCESS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/PUBLIC_IP_ACCESS', '05c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/ROUTER_BOX_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/ROUTER_BOX_CONFIGURATION', '7e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/ROUTER_BOX_SETUP',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/ROUTER_BOX_SETUP', 'a6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/APPLY_IPLIST',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/APPLY_IPLIST', '77e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/CAPI_CLUSTER_HEALTH_ALERTS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/CAPI_CLUSTER_HEALTH_ALERTS', 'f7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/CEPH_NODE_MAINTENANCE',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/CEPH_NODE_MAINTENANCE', '27c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/DELETE_ORPHANED_CLUSTERS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/DELETE_ORPHANED_CLUSTERS', 'cdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/GET_PROVISIONING_LOGS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/GET_PROVISIONING_LOGS', 'e89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/HEDGEHOG_SWITCH_CREDENTIALS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/HEDGEHOG_SWITCH_CREDENTIALS', 'f05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/HEDGEHOG_VM_CREDENTIALS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/HEDGEHOG_VM_CREDENTIALS', '4f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/KEY_ROTATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/KEY_ROTATION', '6c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/key-rotation/ANSIBLE_VAULT',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/key-rotation/ANSIBLE_VAULT', 'fa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/key-rotation/CEPH_RGW_TLS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/key-rotation/CEPH_RGW_TLS', '90d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/key-rotation/SSH_KEYS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/key-rotation/SSH_KEYS', '9aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/key-rotation/TLS_CERTIFICATES',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/key-rotation/TLS_CERTIFICATES', 'fd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/key-rotation/VPN_WIREGUARD_KEYS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/key-rotation/VPN_WIREGUARD_KEYS', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/MGMT_CLUSTER_SUBNET_MIGRATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/MGMT_CLUSTER_SUBNET_MIGRATION', 'a6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/MIGRATE_OSD_DEFAULT_TO_SPEC',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/MIGRATE_OSD_DEFAULT_TO_SPEC', '004'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/NEUTRON_L3_AGENT_RECOVERY',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/NEUTRON_L3_AGENT_RECOVERY', '0ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/OPENSTACK_CLUSTER_STOP_START',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/OPENSTACK_CLUSTER_STOP_START', '5aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/PERSONAL_DATA_DISPOSAL',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/PERSONAL_DATA_DISPOSAL', 'e5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/PGPOOL_WRONG_PRIMARY',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/PGPOOL_WRONG_PRIMARY', '429'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/RECOVER_LOCKED_RBD_VOLUME',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/RECOVER_LOCKED_RBD_VOLUME', '6d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/ROUTER_LOG_ACCESS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/ROUTER_LOG_ACCESS', '0df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/SOFTWARE_UPDATES',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/SOFTWARE_UPDATES', '8ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/SWITCH_HEARTBEAT_ALERT',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/SWITCH_HEARTBEAT_ALERT', '82d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/TENANT_SERVICE_TERMINATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/TENANT_SERVICE_TERMINATION', 'aaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/updates/CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/updates/CONFIGURATION', '478'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/updates/MANAGEMENT_CLUSTER',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/updates/MANAGEMENT_CLUSTER', 'd1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/updates/NODES',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/updates/NODES', '4d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/updates/OPENSTACK',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/updates/OPENSTACK', '353'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/updates/PAAS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/updates/PAAS', '95b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/runbooks/VPN_RECONCILIATION_FAILURE',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/runbooks/VPN_RECONCILIATION_FAILURE', 'e34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/service-operator/VPN_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/service-operator/VPN_CONFIGURATION', 'fef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/user/ADDONS_USER_GUIDE',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/user/ADDONS_USER_GUIDE', 'de2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/user/BAREMETAL_MANAGEMENT',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/user/BAREMETAL_MANAGEMENT', 'dcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/user/GPU_SERVER_VERIFICATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/user/GPU_SERVER_VERIFICATION', '755'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/user/KUBERNETES_CLUSTER_REFERENCE',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/user/KUBERNETES_CLUSTER_REFERENCE', 'a9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/user/OBJECT_STORE_MANAGEMENT',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/user/OBJECT_STORE_MANAGEMENT', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/user/OBSERVABILITY',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/user/OBSERVABILITY', '596'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/user/PUBLIC-IP-ACCESS',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/user/PUBLIC-IP-ACCESS', 'dfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/user/SSH_KEY_REGISTRATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/user/SSH_KEY_REGISTRATION', '344'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/user/VM_MANAGEMENT',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/user/VM_MANAGEMENT', '266'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/v25.1.5/user/VPN_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/v25.1.5/user/VPN_CONFIGURATION', '7c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docusaurus/docs',
        component: ComponentCreator('/docusaurus/docs', '64e'),
        routes: [
          {
            path: '/docusaurus/docs',
            component: ComponentCreator('/docusaurus/docs', '408'),
            routes: [
              {
                path: '/docusaurus/docs/category/key-rotation-runbooks',
                component: ComponentCreator('/docusaurus/docs/category/key-rotation-runbooks', '8df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/category/observability',
                component: ComponentCreator('/docusaurus/docs/category/observability', '708'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/category/runbooks',
                component: ComponentCreator('/docusaurus/docs/category/runbooks', '534'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/category/service-operator',
                component: ComponentCreator('/docusaurus/docs/category/service-operator', 'b28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/category/software-update-runbooks',
                component: ComponentCreator('/docusaurus/docs/category/software-update-runbooks', 'c04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/category/user',
                component: ComponentCreator('/docusaurus/docs/category/user', '9b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/license',
                component: ComponentCreator('/docusaurus/docs/license', 'ee4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/ADDONS_API_REFERENCE',
                component: ComponentCreator('/docusaurus/docs/service-operator/ADDONS_API_REFERENCE', '525'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/ADDONS_OPERATOR_GUIDE',
                component: ComponentCreator('/docusaurus/docs/service-operator/ADDONS_OPERATOR_GUIDE', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/AZURE_SSO_SETUP',
                component: ComponentCreator('/docusaurus/docs/service-operator/AZURE_SSO_SETUP', 'ad8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/BIOS_BMC_SETUP',
                component: ComponentCreator('/docusaurus/docs/service-operator/BIOS_BMC_SETUP', '1f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/CAPI_MANAGEMENT_CLUSTER',
                component: ComponentCreator('/docusaurus/docs/service-operator/CAPI_MANAGEMENT_CLUSTER', 'f32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/CEPH_SETUP',
                component: ComponentCreator('/docusaurus/docs/service-operator/CEPH_SETUP', '88b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/DEPLOYMENT',
                component: ComponentCreator('/docusaurus/docs/service-operator/DEPLOYMENT', 'c93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/GHCR_AUTHENTICATION',
                component: ComponentCreator('/docusaurus/docs/service-operator/GHCR_AUTHENTICATION', '673'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/GOOGLE_SSO_SETUP',
                component: ComponentCreator('/docusaurus/docs/service-operator/GOOGLE_SSO_SETUP', '178'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/IAAS_CONSOLE_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/service-operator/IAAS_CONSOLE_CONFIGURATION', 'b9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/INSTALL_BAREMETAL_NODE',
                component: ComponentCreator('/docusaurus/docs/service-operator/INSTALL_BAREMETAL_NODE', '763'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/IPMI_SNMP_OBSERVABILITY_SETUP',
                component: ComponentCreator('/docusaurus/docs/service-operator/IPMI_SNMP_OBSERVABILITY_SETUP', '855'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/KEY_MANAGEMENT_POLICY',
                component: ComponentCreator('/docusaurus/docs/service-operator/KEY_MANAGEMENT_POLICY', 'cf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/MANAGEMENT_TLS',
                component: ComponentCreator('/docusaurus/docs/service-operator/MANAGEMENT_TLS', '7df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/NETWORK_CONTROL_NODE_SETUP',
                component: ComponentCreator('/docusaurus/docs/service-operator/NETWORK_CONTROL_NODE_SETUP', '219'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/NETWORK_FABRIC_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/service-operator/NETWORK_FABRIC_CONFIGURATION', '3a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/observability/OBSERVABILITY_ALERTS',
                component: ComponentCreator('/docusaurus/docs/service-operator/observability/OBSERVABILITY_ALERTS', '48b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/observability/OBSERVABILITY_DASHBOARDS',
                component: ComponentCreator('/docusaurus/docs/service-operator/observability/OBSERVABILITY_DASHBOARDS', '7ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/observability/OBSERVABILITY_STORAGE',
                component: ComponentCreator('/docusaurus/docs/service-operator/observability/OBSERVABILITY_STORAGE', 'c93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/OPERATOR_API_GUIDE',
                component: ComponentCreator('/docusaurus/docs/service-operator/OPERATOR_API_GUIDE', 'de8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/OPERATOR_OVERVIEW',
                component: ComponentCreator('/docusaurus/docs/service-operator/OPERATOR_OVERVIEW', '6d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/OPERATOR_VPN_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/service-operator/OPERATOR_VPN_CONFIGURATION', '064'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/OS_REQUIREMENTS',
                component: ComponentCreator('/docusaurus/docs/service-operator/OS_REQUIREMENTS', 'dfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/PUBLIC_IP_ACCESS',
                component: ComponentCreator('/docusaurus/docs/service-operator/PUBLIC_IP_ACCESS', '8c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/ROUTER_BOX_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/service-operator/ROUTER_BOX_CONFIGURATION', '1aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/ROUTER_BOX_SETUP',
                component: ComponentCreator('/docusaurus/docs/service-operator/ROUTER_BOX_SETUP', '3f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/APPLY_IPLIST',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/APPLY_IPLIST', 'ea0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/CAPI_CLUSTER_HEALTH_ALERTS',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/CAPI_CLUSTER_HEALTH_ALERTS', '287'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/CEPH_NODE_MAINTENANCE',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/CEPH_NODE_MAINTENANCE', '52b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/DELETE_ORPHANED_CLUSTERS',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/DELETE_ORPHANED_CLUSTERS', '7bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/GET_PROVISIONING_LOGS',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/GET_PROVISIONING_LOGS', 'ee5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/HEDGEHOG_SWITCH_CREDENTIALS',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/HEDGEHOG_SWITCH_CREDENTIALS', 'afc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/HEDGEHOG_VM_CREDENTIALS',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/HEDGEHOG_VM_CREDENTIALS', 'fc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/KEY_ROTATION',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/KEY_ROTATION', 'a42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/key-rotation/ANSIBLE_VAULT',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/key-rotation/ANSIBLE_VAULT', '432'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/key-rotation/CEPH_RGW_TLS',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/key-rotation/CEPH_RGW_TLS', '4e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/key-rotation/SSH_KEYS',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/key-rotation/SSH_KEYS', '107'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/key-rotation/TLS_CERTIFICATES',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/key-rotation/TLS_CERTIFICATES', '779'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/key-rotation/VPN_WIREGUARD_KEYS',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/key-rotation/VPN_WIREGUARD_KEYS', 'cfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/MGMT_CLUSTER_SUBNET_MIGRATION',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/MGMT_CLUSTER_SUBNET_MIGRATION', '04d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/MIGRATE_OSD_DEFAULT_TO_SPEC',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/MIGRATE_OSD_DEFAULT_TO_SPEC', '601'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/NEUTRON_L3_AGENT_RECOVERY',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/NEUTRON_L3_AGENT_RECOVERY', '05e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/OPENSTACK_CLUSTER_STOP_START',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/OPENSTACK_CLUSTER_STOP_START', 'a0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/PERSONAL_DATA_DISPOSAL',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/PERSONAL_DATA_DISPOSAL', '9c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/PGPOOL_WRONG_PRIMARY',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/PGPOOL_WRONG_PRIMARY', 'fd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/RECOVER_LOCKED_RBD_VOLUME',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/RECOVER_LOCKED_RBD_VOLUME', 'a81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/ROUTER_LOG_ACCESS',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/ROUTER_LOG_ACCESS', 'c82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/SOFTWARE_UPDATES',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/SOFTWARE_UPDATES', '5ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/SWITCH_HEARTBEAT_ALERT',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/SWITCH_HEARTBEAT_ALERT', '0d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/TENANT_OBJECT_STORAGE_QUOTA',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/TENANT_OBJECT_STORAGE_QUOTA', '0c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/TENANT_SERVICE_TERMINATION',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/TENANT_SERVICE_TERMINATION', 'ff5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/updates/CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/updates/CONFIGURATION', '215'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/updates/MANAGEMENT_CLUSTER',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/updates/MANAGEMENT_CLUSTER', '642'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/updates/NODES',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/updates/NODES', 'e0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/updates/OPENSTACK',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/updates/OPENSTACK', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/updates/PAAS',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/updates/PAAS', 'a41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/runbooks/VPN_RECONCILIATION_FAILURE',
                component: ComponentCreator('/docusaurus/docs/service-operator/runbooks/VPN_RECONCILIATION_FAILURE', '914'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/service-operator/VPN_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/service-operator/VPN_CONFIGURATION', '55c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/ADDONS_USER_GUIDE',
                component: ComponentCreator('/docusaurus/docs/user/ADDONS_USER_GUIDE', '8cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/BAREMETAL_MANAGEMENT',
                component: ComponentCreator('/docusaurus/docs/user/BAREMETAL_MANAGEMENT', '0e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/BLOCK_STORAGE_SETUP',
                component: ComponentCreator('/docusaurus/docs/user/BLOCK_STORAGE_SETUP', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/GPU_SERVER_VERIFICATION',
                component: ComponentCreator('/docusaurus/docs/user/GPU_SERVER_VERIFICATION', '215'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/KUBERNETES_CLUSTER_REFERENCE',
                component: ComponentCreator('/docusaurus/docs/user/KUBERNETES_CLUSTER_REFERENCE', '4b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/NVME_S3_SECURE_TRANSFER',
                component: ComponentCreator('/docusaurus/docs/user/NVME_S3_SECURE_TRANSFER', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/OBJECT_STORE_MANAGEMENT',
                component: ComponentCreator('/docusaurus/docs/user/OBJECT_STORE_MANAGEMENT', '7bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/OBSERVABILITY',
                component: ComponentCreator('/docusaurus/docs/user/OBSERVABILITY', '191'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/PUBLIC-IP-ACCESS',
                component: ComponentCreator('/docusaurus/docs/user/PUBLIC-IP-ACCESS', 'efd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/SSH_KEY_REGISTRATION',
                component: ComponentCreator('/docusaurus/docs/user/SSH_KEY_REGISTRATION', 'f63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/VM_MANAGEMENT',
                component: ComponentCreator('/docusaurus/docs/user/VM_MANAGEMENT', 'c6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/user/VPN_CONFIGURATION',
                component: ComponentCreator('/docusaurus/docs/user/VPN_CONFIGURATION', 'b8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus/',
    component: ComponentCreator('/docusaurus/', 'c25'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
