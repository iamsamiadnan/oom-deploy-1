"use client";
import { Button, Drawer, DrawerProps, theme } from "antd";
import { useEffect, useState } from "react";

type Category = { id: number; name: string };
type Treatment = {
  id: number;
  name: string;
  price: number;
  desc: string;
  beautyCategoryId: number;
};

export default function Home() {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [treatments, setTreatments] = useState<Treatment[] | null>(null);

  const [open, setOpen] = useState(false);
  const { token } = theme.useToken();
  const [size, setSize] = useState<DrawerProps["size"]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/api/v1/beauty-category");
      const result = await res.json();
      //console.log(result);
      setCategories(result.data);
    };
    fetchData();
  }, []);

  const fetchTreatments = async (beautyCategoryId: number) => {
    const res = await fetch("http://localhost:8000/api/v1/treatment");
    const result = await res.json();
    console.log("treatments", result);

    if (result) {
      setTreatments(
        result.data.filter(
          (treatment: Treatment) =>
            treatment.beautyCategoryId === beautyCategoryId
        )
      );
      showDrawer();
    }
  };

  const showDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    height: 852,
    padding: 48,
    overflow: "hidden",
    background: "#fafafa",
    border: `1px solid ${token.colorBorderSecondary}`,
    width: 393,
    margin: "auto",
  };

  return (
    <div style={containerStyle}>
      <div className="border-b-2 mb-8 pb-4">OOM</div>
      <ul className="flex flex-col gap-2">
        {categories?.map((category: Category) => (
          <li key={category.id}>
            <Button size="large" onClick={() => fetchTreatments(category.id)}>
              {category.name}
            </Button>
          </li>
        ))}
      </ul>
      {/* <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div> */}
      <Drawer
        title="Treatments"
        placement="bottom"
        closable={true}
        onClose={onClose}
        open={open}
        getContainer={false}
        size={size}
      >
        <div>
          <ul className="flex flex-col gap-2">
            {treatments?.map((treatment: Treatment) => (
              <li key={treatment.id}>
                <li>
                  <div className="border border-gray-300 p-4 flex flex-col gap-1 rounded-md cursor-pointer hover:bg-gray-100">
                    <span>{treatment.name}</span>
                    <p>{treatment.desc}</p>
                    <span>{treatment.price}</span>
                  </div>
                </li>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
