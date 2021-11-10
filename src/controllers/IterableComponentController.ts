import { IEventParam, Metadata } from '@zeedhi/core';
import { IterableComponentRender } from '@zeedhi/teknisa-components-common';

export class IterableComponentController {
  public getParentData({ component }: IEventParam<IterableComponentRender>) {
    const parentIterable = Metadata.getInstance<IterableComponentRender>('IterablecomponentParent');
    const id = component.name.split('_').pop();
    const parentIndex = parentIterable.datasource.data.findIndex((row) => row.id === id);
    component.datasource.data = parentIterable.datasource.data[parentIndex].list;
  }
}