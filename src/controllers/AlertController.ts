import { AlertService } from '@zeedhi/common';

export class AlertController {

  public showBasicAlert(results: number) {
    AlertService.show({ name: 'basic-alert', text: 'Results: ' + results });
  }
}