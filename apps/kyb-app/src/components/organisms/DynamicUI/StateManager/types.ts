import { StateMachineAPI } from '@/components/organisms/DynamicUI/StateManager/hooks/useMachineLogic';
import {
  CollectionFlowConfig,
  CollectionFlowContext,
} from '@/domains/collection-flow/types/flow-context.types';
import { AnyRecord } from '@ballerine/common';
import { AnyChildren, AnyObject } from '@ballerine/ui';
import { MachineConfig } from 'xstate';

export type State = MachineConfig<AnyObject, AnyObject, any>;

export interface StateManagerContext {
  stateApi: StateMachineAPI;
  state: string;
  payload: CollectionFlowContext;
  config?: CollectionFlowConfig;
  isPluginLoading: boolean;
}

export type StateManagerChildCallback = (bag: StateManagerContext) => JSX.Element;

export interface StateManagerProps {
  workflowId: string;
  definition: State;
  definitionType: string;
  extensions: AnyObject;
  children: AnyChildren | StateManagerChildCallback;
  initialContext: CollectionFlowContext | null;
  config?: CollectionFlowConfig;
  additionalContext?: AnyRecord;
}
