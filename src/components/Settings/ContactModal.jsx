import { Button, Flex, Modal, Stack, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router";

const ContactModal = ({ opened, close }) => {
  const navigate = useNavigate();

  const websiteUrl = "https://example.com"; // ← عدّله إلى الموقع المطلوب

  return (
    <>
      <Modal
        w="100%"
        radius={20}
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
        style={{ position: "absolute", right: 0 }}
      >
        <Stack pb={30} dir="rtl" className="modal" w="70%" m="auto" gap={20}>
          <Title order={3}>تواصل معنا</Title>

          <Text size="sm">
            إن كان لديك أي استفسار أو مشكلة ما، يمكنك التواصل معنا{" "}
            <Text
              component="a"
              href={websiteUrl}
              target="_blank"
              c="blue"
              td="underline"
              fw={500}
            >
              من هنا
            </Text>{" "}
            أو من خلال زيارة الموقع الإلكتروني أدناه.
          </Text>

          <Button
            component="a"
            href={websiteUrl}
            target="_blank"
            variant="outline"
            color="blue"
            radius="md"
            fullWidth
          >
            زيارة الموقع الإلكتروني
          </Button>
        </Stack>
      </Modal>
    </>
  );
};

export default ContactModal;
