import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    })
  ],
  argTypes: {
    label: {
      description: "label of the button"
    },
    disabled: {
      description: "toggle between disabled state",
      table: {
        defaultValue: {summary: false}
      }
    },
    color: {
      description: "type of button",
      options: [
        'primary',
        'accent',
        'warn'
      ],
      table: {
        defaultValue: {summary: 'primary'}
      }
    }
  }
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    label:  'label',
    disabled:  false,
    color:  'primary',
}

export const Accent = Template.bind({});
Accent.args = {
    label:  'label',
    disabled:  false,
    color:  'accent',
}

export const Warn = Template.bind({});
Warn.args = {
    label:  'label',
    disabled:  false,
    color:  'warn',
}

export const Disabled = Template.bind({});
Disabled.args = {
    label:  'label',
    disabled: true,
    color:  'primary',
}