import {
  Card,
  Grid,
  Text,
  Title,
  Flex,
  Paper,
  Image,
  Accordion
} from "@mantine/core";
import React from "react";
import healthReport from "../../assets/vectors/HealthReport.svg";

const ClinicsPatientReview = ({ review }) => {
  const clinicData = [
    {
      title: "العيادة العينية",
      hasKey: "has_a_eye_disease",
      nameKey: "in_kind_disease",
      relationKey: "relationship_eyes_with_diabetes",
      commentsKey: "Comments_eyes_clinic",
    },
    {
      title: "العيادة القلبية",
      hasKey: "has_a_heart_disease",
      nameKey: "heart_disease",
      relationKey: "relationship_heart_with_diabetes",
      commentsKey: "Comments_heart_clinic",
    },
    {
      title: "العيادة البولية",
      hasKey: "has_a_urinary_disease",
      nameKey: "urinary_disease",
      relationKey: "relationship_urinary_with_diabetes",
      commentsKey: "Comments_urinary_clinic",
    },
    {
      title: "العيادة العظمية",
      hasKey: "has_a_bone_disease",
      nameKey: "bone_disease",
      relationKey: "relationship_bone_with_diabetes",
      commentsKey: "Comments_bone_clinic",
    },
    {
      title: "العيادة العصبية",
      hasKey: "has_a_nerve_disease",
      nameKey: "nerve_disease",
      relationKey: "relationship_nerve_with_diabetes",
      commentsKey: "Comments_nerve_clinic",
    },
  ];

  return (
    // <Paper shadow="md" radius="lg" withBorder bg="#fffefc" p={20}>
      <Accordion radius={20} variant="contained" chevronPosition="left">
        <Grid gutter="sm" justify="start" mb={20} align="center" dir="rtl">
          {clinicData.map((clinic, idx) => {
            const show = review[clinic.hasKey];

            return (
              <Grid.Col  key={idx} span={{ base: 12, sm: 6 }}>
                <Accordion.Item   value={clinic.title}>
                  <Accordion.Control>
                    <Flex p={20} align="center" gap={20}>
                      <Image src={healthReport} w={25} />
                      <Text size="1.3rem" fw={600}>
                        {clinic.title}
                      </Text>
                      <Text mr={10} size="md" fw={600} c={show ? "red" : "green"} ml="auto">
                        {show ? "يوجد مرض" : "سليم"}
                      </Text>
                    </Flex>
                  </Accordion.Control>

                  {show && (
                    <Accordion.Panel>
                      <Card bg="#fffefc" withBorder radius="md" p={20} mt={10}>
                        <Flex direction="column" gap="2rem">
                          <Flex gap="lg">
                            <Text fw={600} size="1.1rem">
                              المرض:
                            </Text>
                            <Text>{review[clinic.nameKey] || "—"}</Text>
                          </Flex>

                          <Text ta={'right'} fw={600} size="1.1rem">
                            {review[clinic.relationKey]
                              ? "المرض مرتبط بداء السكري"
                              : "المرض غير مرتبط بداء السكري"}
                          </Text>

                          <Flex gap="sm">
                            <Text fw={600} size="1.1rem">
                              الملاحظات:
                            </Text>
                            <Text>{review[clinic.commentsKey] || "—"}</Text>
                          </Flex>
                        </Flex>
                      </Card>
                    </Accordion.Panel>
                  )}
                </Accordion.Item>
              </Grid.Col>
            );
          })}

          {/* عيادات أخرى */}
          <Grid.Col span={{ base: 12, sm: 12 }}>
            <Accordion.Item value="عيادات أخرى">
              <Accordion.Control>
                <Flex p={20} align="center" gap={10}>
                  <Image src={healthReport} w={25} />
                  <Text size="1.3rem" fw={600}>
                    عيادات أخرى
                  </Text>
                  <Text size="md" fw={600} ml="auto">
                    {review.otherClinics ? "نعم" : "لا"}
                  </Text>
                </Flex>
              </Accordion.Control>

              {review.otherClinics && (
                <Accordion.Panel>
                  <Card bg="#f9f9f9" withBorder radius="md" p={20} mt={10}>
                    <Flex direction="column" gap="sm">
                      <Text fw={600} size="1.1rem">
                        الملاحظات:
                      </Text>
                      <Text>{review.coments || "—"}</Text>
                    </Flex>
                  </Card>
                </Accordion.Panel>
              )}
            </Accordion.Item>
          </Grid.Col>
        </Grid>
      </Accordion>
    // </Paper>
  );
};

export default ClinicsPatientReview;
