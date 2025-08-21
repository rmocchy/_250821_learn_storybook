import * as React from 'react';
import { FullScreenModal, Button, ListTable, Paragraph } from '@freee_jp/vibes';
import { HierarchicalTableComponent } from '../cfo_table/cfo_table.stories';

export default {
  component: FullScreenModal,
};

export const FullScreenModalComponent = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <>
      <Button onClick={toggle}>open</Button>
      <FullScreenModal
        id={'Id-FullScreenModal'}
        isOpen={isOpen}
        title={'フルスクリーンモーダル'}
        contentLabel={"フルスクリーンモーダル"}
        onRequestClose={toggle}
      >
        <HierarchicalTableComponent />
      </FullScreenModal>
    </>
  );
};

export const HeaderSideContentSample = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <>
      <Button onClick={toggle}>open</Button>
      <FullScreenModal
        id={"FullScreenModal"}
        isOpen={isOpen}
        title={'フルスクリーンモーダル'}
        contentLabel={"フルスクリーンモーダル"}
        onRequestClose={toggle}
        headerSideContent={<Button>ボタン</Button>}
      >
        {[...Array.from(Array(20).keys())].map((value) => (
          <Paragraph key={value}>
            画面いっぱいに広がるモーダルです。TaskDialogに収まりきらない複雑なコンテンツを配置できます。
          </Paragraph>
        ))}
      </FullScreenModal>
    </>
  );
};

export const FullScreenModalWithListTable = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <>
      <Button onClick={toggle}>open</Button>
      <FullScreenModal
        isOpen={isOpen}
        title={'ListTableを持つFullScreenModal'}
        onRequestClose={toggle}
      >
        <Paragraph>ListTableの上にいろいろ置いたりするよね</Paragraph>
        <ListTable
          headers={[{ value: 'ヘッダー1' }, { value: 'ヘッダー2' }]}
          rows={Array.from(Array(200).keys()).map(() => ({
            cells: [{ value: 'セル1' }, { value: 'セル2' }],
          }))}
          fixedHeader={true}
          fixedHeaderOffset={'-1.5rem'}
        />
      </FullScreenModal>
    </>
  );
};