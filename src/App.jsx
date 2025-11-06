import React from 'react';
import { Layout, Menu, Typography, Card, Statistic, Tag, Timeline, Divider, Row, Col, Button, theme, Affix, Avatar } from 'antd';
import {
  SafetyOutlined,
  CodeOutlined,
  BugOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  RocketOutlined,
  StarOutlined,
} from '@ant-design/icons';
import './App.css'; 

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const PINK_ACCENT = '#ff4d94'; 
const DARK_BG = '#1a1a33';    
const DARK_GRAY = '#404040';  


const AppHeader = () => {
    const items = [
        { key: 'summary', label: 'Summary' },
        { key: 'experience', label: 'Experience' },
        { key: 'skills', label: 'Skills' },
        { key: 'education', label: 'Education' },
        { key: 'contact', label: 'Contact' },
    ];
  
    
    const handleMenuClick = (e) => {
        document.getElementById(e.key)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Affix offsetTop={0}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: DARK_BG,
                    borderBottom: `1px solid ${DARK_GRAY}`,
                    padding: '0 20px',
                    zIndex: 10,
                }}
            >
                <Title level={3} style={{ 
                    color: PINK_ACCENT, 
                    margin: 0, 
                    minWidth: 250 
                }}>
                    Desree Mabusela
                </Title>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['summary']}
                    items={items}
                    onClick={handleMenuClick}
                    style={{ flex: 1, minWidth: 0, justifyContent: 'flex-end', backgroundColor: DARK_BG, color: '#f0f0f0' }}
                />
            </Header>
        </Affix>
    );
};


const SummarySection = () => {
    
   const publicImageUrl = `${import.meta.env.BASE_URL}Kwena.jpeg`;

    return (
        <div id="summary" 
            className="hero-gradient-background" 
            style={{ textAlign: 'center', padding: '60px 20px' }} 
        >
            <div style={{ marginBottom: 20 }}>
                <Avatar 
                    size={150} 
                    src={publicImageUrl} 
                    alt="Desree Mabusela Professional Avatar"
                    style={{ border: `4px solid ${PINK_ACCENT}` }} 
                />
            </div>
            
            <Title level={1} style={{ color: 'white', marginTop: 0 }}>
                Software Test Engineer | Certified Test Analyst
            </Title>
            <Paragraph style={{ maxWidth: 800, margin: '0 auto 40px', fontSize: '18px', color: '#ccc' }}>
                Certified Test Analyst and Software Developer with 4+ years of experience across software testing, front-end
                development, and database management. Skilled in manual and automated testing, regression analysis, and UAT coordination.
            </Paragraph>

            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={8}>
                    <Card border={false} hoverable style={{ backgroundColor: DARK_BG }}>
                        <Statistic
                            title={<Text style={{ color: '#ccc' }}>Defect Recurrence Reduction</Text>}
                            value="40%"
                            prefix={<BugOutlined style={{ color: PINK_ACCENT }} />}
                            valueStyle={{ color: PINK_ACCENT }}
                        />
                        <Text type="secondary" style={{ fontSize: '12px', color: '#999' }}>
                            (via established Jira-based defect tracking)
                        </Text>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card border={false} hoverable style={{ backgroundColor: DARK_BG }}>
                        <Statistic
                            title={<Text style={{ color: '#ccc' }}>UAT Sign-off Improvement</Text>}
                            value="40%"
                            prefix={<SafetyOutlined style={{ color: PINK_ACCENT }} />}
                            valueStyle={{ color: PINK_ACCENT }}
                        />
                         <Text type="secondary" style={{ fontSize: '12px', color: '#999' }}>
                            (through improved acceptance criteria alignment)
                        </Text>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card border={false} hoverable style={{ backgroundColor: DARK_BG }}>
                        <Statistic
                            title={<Text style={{ color: '#ccc' }}>Project Delivery Acceleration</Text>}
                            value="15%"
                            prefix={<RocketOutlined style={{ color: PINK_ACCENT }} />}
                            valueStyle={{ color: PINK_ACCENT }}
                        />
                         <Text type="secondary" style={{ fontSize: '12px', color: '#999' }}>
                            (by executing early bug detection and testing)
                        </Text>
                    </Card>
                </Col>
            </Row>
            <Divider style={{ borderColor: DARK_GRAY }} />
        </div>
    );
};


const ExperienceItem = ({ icon, date, title, tags, children }) => {
    return (
        <Row gutter={24} style={{ marginBottom: 40, alignItems: 'stretch' }}>
           
            <Col xs={24} md={4} style={{ textAlign: 'left' }}>
                <Text strong style={{ color: PINK_ACCENT, fontSize: '15px', display: 'flex', alignItems: 'center' }}>
                    {icon}
                    <span style={{ marginLeft: 8 }}>{date}</span>
                </Text>
            </Col>

           
            <Col xs={24} md={20}>
                <Card 
                    title={
                        <Title level={4} style={{ color: PINK_ACCENT, margin: 0 }}>
                            {title}
                        </Title>
                    } 
                    border={true} 
                    size="default" 
                   
                    style={{ backgroundColor: DARK_BG, height: '100%', padding: '10px 15px' }} 
                >
                    
                    <ul style={{ color: '#ccc', listStyleType: 'disc', paddingLeft: '20px', margin: '0 0 10px 0', fontSize: '14px' }}>
                        {children}
                    </ul>
                    <div>
                        {tags.map(tag => (
                            <Tag key={tag.name} color={tag.color} style={{ margin: '4px 8px 4px 0' }}>
                                {tag.name}
                            </Tag>
                        ))}
                    </div>
                </Card>
            </Col>
        </Row>
    );
};


const ExperienceSection = () => {

    return (
       
        <div id="experience" style={{ padding: '0 20px', maxWidth: 1200, margin: '0 auto' }}> 
            <Title level={2} style={{ color: PINK_ACCENT, textAlign: 'center', marginBottom: 40 }}>
                Professional Experience
            </Title>
            
            
            <ExperienceItem
                icon={<BugOutlined style={{ color: PINK_ACCENT, fontSize: '16px' }} />}
                date="06/2023 - Present"
                title="Test Analyst - BMW IT Hub, Menlyn"
                tags={[
                    { name: "Playwright Automation", color: PINK_ACCENT },
                    { name: "UAT Coordination", color: PINK_ACCENT },
                    { name: "Jira / Defect Tracking", color: PINK_ACCENT },
                ]}
            >
                <li>Lead UAT coordination and acceptance criteria alignment, improving sign-off rates by <strong>40%</strong>.</li>
                <li>Developed automated <strong>Playwright </strong>scripts, boosting test coverage and cutting manual testing effort by <strong>30%</strong>.</li>
                <li>Managed a <strong>Jira</strong> defect tracking workflow, reducing recurrence of critical bugs by <strong>40%</strong>.</li>
                <li>Collaborated with developers to reproduce and resolve defects early, preventing <strong>25%</strong> of critical bugs from reaching UAT.</li>
            </ExperienceItem>

           
            <ExperienceItem
                icon={<CodeOutlined style={{ color: PINK_ACCENT, fontSize: '16px' }} />}
                date="01/2021 - 06/2023"
                title="Software Developer - BMW IT Hub, Menlyn"
                tags={[
                    { name: "React", color: PINK_ACCENT },
                    { name: "GraphQL", color: PINK_ACCENT },
                    { name: "MongoDB", color: PINK_ACCENT },
                ]}
            >
                <li>Managed <strong>MongoDB</strong> operations and optimized schemas, reducing query response times by <strong>35%</strong>.</li>
                <li>Designed and implemented <strong>GraphQL</strong> mutations and APIs to streamline data access.</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions on time.</li>
                <li>Introduced a <strong>Git</strong> code review process, preventing an average of <strong>12 bugs per sprint</strong>.</li>
                <li>Developed and maintained front-end applications using <strong>React</strong> and <strong>Ant Design</strong>.</li>
            </ExperienceItem>

           
            <ExperienceItem
                icon={<StarOutlined style={{ color: PINK_ACCENT, fontSize: '16px' }} />}
                date="01/2020 - 11/2020"
                title="Software Developer - WITS Incubator"
                tags={[
                    { name: "Angular", color: PINK_ACCENT },
                    { name: "JavaScript", color: PINK_ACCENT },
                    { name: "Git", color: PINK_ACCENT },
                ]}
            >
                <li>Spearheaded the development of three web applications using <strong>Angular</strong>, <strong>React</strong>, and <strong>JavaScript</strong>.</li>
                <li>Applied version control practices with <strong>Git</strong>, enabling smooth collaboration and code integrity.</li>
                <li>Collaborated with cross-functional teams to gather requirements and deliver functional prototypes.</li>
            </ExperienceItem>
            
            <Divider style={{ borderColor: DARK_GRAY }} />
        </div>
    );
};


const SkillsSection = () => {

    const coreSkills = [
        "Manual and Automated Testing", "Test Automation", "Test Planning, Test Case Design", 
        "Defect Tracking, Root Cause Analysis", "UAT Coordination", "Agile & Scrum Methodologies"
    ];
    const techStack = [
        "Playwright", "React", "GraphQL", "MongoDB", 
        "Jira, Confluence", "Bitbucket, Git", "HTML, CSS, JavaScript"
    ];

    return (
        <div id="skills" style={{ padding: '60px 20px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <Title level={2} style={{ color: PINK_ACCENT, marginBottom: 30 }}>
                Core Competences and Skills
            </Title>
            <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                    <Card 
                        title={
                            <Title level={4} style={{ color: PINK_ACCENT, fontWeight: 'bold', margin: 0 }}>
                                Software Quality & Process
                            </Title>
                        } 
                        border={true} 
                        style={{ backgroundColor: DARK_BG }}
                    >
                        {coreSkills.map(skill => (
                            <Tag key={skill} color={PINK_ACCENT} style={{ margin: '4px 8px' }}>
                                {skill}
                            </Tag>
                        ))}
                        <Tag color={PINK_ACCENT} style={{ margin: '4px 8px', borderColor: PINK_ACCENT }}>
                            Strong Analytical
                        </Tag>
                        <Tag color={PINK_ACCENT} style={{ margin: '4px 8px', borderColor: PINK_ACCENT }}>
                            Problem Solving
                        </Tag>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card 
                        title={
                            <Title level={4} style={{ color: PINK_ACCENT, fontWeight: 'bold', margin: 0 }}>
                                Technical Stack
                            </Title>
                        }
                        border={true} 
                        style={{ backgroundColor: DARK_BG }}
                    >
                        {techStack.map(tech => (
                            <Tag key={tech} color={PINK_ACCENT} style={{ margin: '4px 8px' }}>
                                {tech}
                            </Tag>
                        ))}
                         <Tag color={PINK_ACCENT} style={{ margin: '4px 8px' }}>
                            Version Control & Code Review
                        </Tag>
                        <Tag color={PINK_ACCENT} style={{ margin: '4px 8px' }}>
                            Front-End Development
                        </Tag>
                    </Card>
                </Col>
            </Row>
            <Divider style={{ borderColor: DARK_GRAY }} />
        </div>
    );
};


const EducationSection = () => {
    
    return (
        <div id="education" style={{ padding: '60px 20px', maxWidth: 800, margin: '0 auto' }}>
            <Title level={2} style={{ color: PINK_ACCENT, textAlign: 'center', marginBottom: 30 }}>
                Education and Certifications
            </Title>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} md={12}>
                    <Card 
                        title={
                            <div style={{ minHeight: '30px' }}>
                                <Title level={4} style={{ color: PINK_ACCENT, margin: 0 }}>
                                    Academic Background
                                </Title>
                            </div>
                        }
                        border={true} 
                        size="small" 
                        style={{ backgroundColor: DARK_BG, height: '100%' }}
                    >
                        <Title level={4} style={{ color: '#f0f0f0' }}>BSc in Information Technology</Title>
                        <Text strong style={{ color: '#ccc' }}>Richfield Graduate Institute of Technology</Text>
                        <Paragraph style={{ marginTop: 5, color: '#999' }}>2019</Paragraph>
                        
                       
                        <Divider style={{ margin: '10px 0', borderColor: 'transparent' }} /> 
                        <Title level={4} style={{ marginBottom: 5, color: 'transparent' }}>&nbsp;</Title>
                        <Text strong style={{ color: 'transparent', display: 'block' }}>&nbsp;</Text>
                       
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card 
                        title={
                            <div style={{ minHeight: '30px' }}>
                                <Title level={4} style={{ color: PINK_ACCENT, margin: 0 }}>
                                    Certifications
                                </Title>
                            </div>
                        }
                        border={true} 
                        size="small" 
                        style={{ backgroundColor: DARK_BG, height: '100%' }}
                    >
                        <Title level={4} style={{ marginBottom: 5, color: '#f0f0f0' }}>
                            <SafetyOutlined style={{ marginRight: 8, color: PINK_ACCENT }} /> AWS Certified Cloud Practitioner
                        </Title>
                        <Text strong style={{ color: '#ccc' }}>Amazon Web Services, 2024</Text>
                        <Divider style={{ margin: '10px 0', borderColor: DARK_GRAY }} />
                        <Title level={4} style={{ marginBottom: 5, color: '#f0f0f0' }}>
                            <SafetyOutlined style={{ marginRight: 8, color: PINK_ACCENT }} /> Certified Tester Foundation Level (CTFL)
                        </Title>
                        <Text strong style={{ color: '#ccc' }}>ISTQB, 2023</Text>
                    </Card>
                </Col>
            </Row>
            <Divider style={{ borderColor: DARK_GRAY }} />
        </div>
    );
};


const AppFooter = () => {
    
    return (
        <Footer id="contact" style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#001f4d' }}>
            <Title level={3} style={{ color: '#fff', margin: 0 }}>
                Get In Touch
            </Title>
            <div style={{ marginTop: 20 }}>
                <Button
                    type="primary"
                    size="large"
                    icon={<LinkedinOutlined />}
                    href="https://www.linkedin.com/in/desreemabusela" 
                    target="_blank"
                    style={{ margin: '0 10px', backgroundColor: PINK_ACCENT, color: '#fff', borderColor: PINK_ACCENT }}
                >
                    LinkedIn
                </Button>
                <Button
                    type="primary"
                    size="large"
                    icon={<MailOutlined />}
                    href="mailto:desreedesire73@gmail.com"
                    style={{ margin: '0 10px', backgroundColor: PINK_ACCENT, color: '#fff', borderColor: PINK_ACCENT }}
                >
                    Email Me
                </Button>
                <Button
                    type="primary"
                    size="large"
                    icon={<PhoneOutlined />}
                    style={{ margin: '0 10px', backgroundColor: PINK_ACCENT, color: '#fff', borderColor: PINK_ACCENT }}
                >
                    (+27) 66 339 3555
                </Button>
            </div>
            <Paragraph style={{ color: '#fff', marginTop: 20 }}>
                Midrand, Gauteng | Built with React and Ant Design
            </Paragraph>
        </Footer>
    );
};

const App = () => {
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#0d0d1a' }}> 
            <AppHeader />
            <Content style={{ padding: '0 50px', backgroundColor: '#0d0d1a' }}>
                <SummarySection />
                <ExperienceSection />
                <SkillsSection />
                <EducationSection />
            </Content>
            <AppFooter />
        </Layout>
    );
};

export default App;