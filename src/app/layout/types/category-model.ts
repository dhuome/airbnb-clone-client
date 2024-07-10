import { IconName } from '@fortawesome/fontawesome-svg-core';

export type CategoryName =
  | 'ALL'
  | 'AMAZING_VIEWS'
  | 'OMG'
  | 'TREEHOUSES'
  | 'BEACH'
  | 'ARTIC'
  | 'BOAT'
  | 'BED_AND_BREAKFAST'
  | 'ROOMS'
  | 'EARTH_HOMES'
  | 'TOWER'
  | 'CAVES'
  | 'LUXES'
  | 'CHEFS_KITCHEN'
  | 'CAMPERS'
  | 'SKIING'
  | 'CASTLE'
  | 'CAMPING'
  | 'CONTAINERS'
  | 'LAKE'
  | 'TINY_HOMES'
  | 'FARMS';

export interface Category {
  icon: IconName;
  displayName: string;
  technicalName: CategoryName;
  activated: boolean;
}
