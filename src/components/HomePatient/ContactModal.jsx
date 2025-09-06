import { Button, Flex, Group, Modal, Text, Textarea, Title, Tooltip, Badge } from "@mantine/core";
import { Copy, CopyCheck, CopyIcon, MessageCirclePlus, PenLine } from "lucide-react";
import { useClipboard } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";  // استيراد Notifications من Mantine
import { useState } from "react";

const ContactModal = ({ opened, close, centerEmail }) => {
  const { copy } = useClipboard();
  const [notificationOpened, setNotificationOpened] = useState(false);
  const textToCopy = centerEmail;

  const handleCopy = () => {
    copy(textToCopy);
    Notifications.show({
      title: "تم النسخ!",
      position:"bottom-center",
      message: "تم نسخ الايميل إلى الحافظة.",
      color: "blue",
      icon: <CopyIcon size={18} />,
      autoClose: 2500, 
      radius:20,
      dir:'rtl'
    });
  };

  return (
    <>
      <Modal
        w={'100%'}
        centered
        style={{ position: "absolute", right: 0 }}
        opened={opened}
        onClose={close}
        radius={20}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Title mb={30} size={'xl'} ta={'center'}>
          <MessageCirclePlus size={20} /> تواصل
        </Title>
        <Text size="lg" ta={'center'}>
          يمكنك التواصل وطلب الرعاية الطبية
        </Text>

        <Text my={5} size="md" ta={'center'}>
          المراسلة على ايميل المركز
        </Text>

        <Group mt={10} justify="center" spacing={10} align="center">
          <Badge variant="light" color="#16aabb" size="lg">{textToCopy}</Badge>
          <Tooltip label={'نسخ الايميل'}>
            <CopyIcon size={15} color="#000" onClick={handleCopy} />
          </Tooltip>
        </Group>

        <Flex my={20} dir={'rtl'} justify={'right'} align={'center'}>
          <Flex gap={30} mt={10} w='100%' justify='space-between'>
            <Button size="md" radius={10} fullWidth variant="filled" color="#37a8ef" onClick={close}>
              إغلاق
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default ContactModal;
