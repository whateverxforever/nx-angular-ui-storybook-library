import { MatButtonModule } from '@angular/material/button';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

// @ts-ignore: add file not a module
import readme from './button.md';

const generateProps = ({
  label = 'Button',
  color = 'primary',
  disabled = false,
}: {
  label?: string;
  color?: 'primary' | 'accent' | 'warn';
  disabled?: boolean;
} = {}) => {
  return {
    label,
    color,
    disabled,
  };
};

export default {
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    label: {
      description: 'label of the button',
    },
    disabled: {
      description: 'toggle between disabled state',
      table: {
        defaultValue: { summary: false },
      },
    },
    color: {
      description: 'type of button',
      options: ['primary', 'accent', 'warn'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = generateProps();

export const Primary = Template.bind({});
Primary.args = generateProps({ color: 'primary' });

export const Accent = Template.bind({});
Accent.args = generateProps({ color: 'accent' });

export const Warn = Template.bind({});
Warn.args = generateProps({ color: 'warn' });

export const Disabled = Template.bind({});
Disabled.args = generateProps({ disabled: true });

export const Icon = Template.bind({});
Icon.args = generateProps({ disabled: true });
