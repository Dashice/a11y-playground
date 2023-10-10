import { tw } from 'helpers';
import { View } from 'ui';

const contents = [
  ['Companies', 'Facebook', 'Amazon', 'Apple', 'Netflix', 'Google'],
  ['Revenue', '$86bn', '$386bn', '$274bn', '$25bn', '$182bn'],
  ['Employees', '60,000', '1,298,000', '147,000', '9,400', '135,000'],
  ['Market Cap', '$1.01tn', '$1.77tn', '$2.43tn', '$242bn', '$1.67tn'],
  ['User Rating', '3.1/5', '4.61/5', '4.54/5', '4.7/5', '4.1/5'],
];

const cellStyles = 'border border-gray-700 px-2 py-1';

const _6 = () => {
  return (
    <View
      title="6. Semantics (Table)"
      difficulty={2}
      description="Copy the markup into the empty <div /> and fix any semantic oversights. How can we, using the visual look of the table, derive better semantics? Note: If you are not comfortable with React, you can recreate the table without any mapping functions or styles."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <table>
          <tbody>
            {contents.map((row, index, rows) => (
              <tr
                key={index}
                className={tw(
                  cellStyles,
                  index === 0 && 'font-bold bg-gray-800',
                  index > 0 && index < rows.length - 1 && 'text-center',
                  index === rows.length - 1 && 'text-center bg-gray-800 text-xs'
                )}
              >
                {row.map((cell, jIndex, cells) => (
                  <td
                    key={jIndex}
                    className={tw(
                      cellStyles,
                      jIndex === 0 && 'font-bold bg-gray-800 text-start',
                      jIndex > 0 && jIndex < cells.length - 1 && 'text-center',
                      jIndex === cells.length - 1 && 'text-center'
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _6;
