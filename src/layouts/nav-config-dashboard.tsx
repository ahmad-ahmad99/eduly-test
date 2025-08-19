import type { NavSectionProps } from 'src/components/nav-section';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  analytics: icon('ic-analytics'),
};

// ----------------------------------------------------------------------

export const navData: NavSectionProps['data'] = [
  {
    items: [
      {
        title: 'analytics',
        path: paths.dashboard.analytics,
        icon: ICONS.analytics,
      },
    ],
  },
];
